import React from 'react';
import styled from 'styled-components';
import VideoIcon from '../../../../static/image/videoIco.png';

const MessageItem = ({
    data: {
        message, published, read_by, variant, link, type,
    },
}) => {
    const onClickToLink = () => {
        window.open(link);
    };

    let messageData = message;
    switch (variant) {
    case 'link': messageData = Link(link, onClickToLink); break;
    case 'call': messageData = Audio(link); break;
    case 'attachment': messageData = message.includes('video')
        ? Image(VideoIcon, '100px', onClickToLink)
        : Image(link, '200px', onClickToLink); break;
    default: break;
    }

    return (
        <>
            {type
                ? <div className="messenger-chat-item">
                    <div className="chat-item__right">
                        <div className="chat-item__text">
                            {messageData}
                        </div>
                        <div className="chat-item__meta">
                            <span>
                                {published}
                            </span>
                        </div>
                    </div>
                </div>
                : <div className="messenger-chat-item">
                    <div className="chat-item__left">
                        <div className="chat-item__text">
                            {messageData}
                        </div>
                        <div className="chat-item__meta">
                            <span className="mr-5">
                                read: {read_by}
                            </span>
                            <span>
                                {published}
                            </span>
                        </div>

                    </div>
                </div>
            }
        </>
    );
};

const Audio = (url) => (
    <audio style={{ height: '20px', marginRight: '10px' }} controls className="player"
        preload="false">
        <source src={url}/>
    </audio>
);

const SpanLink = styled.span`
   word-break: break-word;
   text-decoration: underline;
   cursor: pointer;
`;

const Image = (url, width, fn) => <img onClick={fn} style={{ width }} src={url} alt="Image"/>;
const Link = (url, fn) => <SpanLink style={{}} onClick={fn}>{url}</SpanLink>;

export default React.memo(MessageItem);
