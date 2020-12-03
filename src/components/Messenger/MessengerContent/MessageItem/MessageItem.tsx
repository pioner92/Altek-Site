import React from 'react';
import styled from 'styled-components';
import VideoIcon from '../../../../static/image/videoIco.png';
import {LeftItem} from "./LeftItem/LeftItem";
import {RightItem} from "./RightItem/RightItem";
import {messagesType} from "../../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";

type propsType = {
    data: messagesType
}

const MessageItem: React.FC<propsType> = ({data: {message, published, read_by, variant, link, type, media}}) => {

    const onClickToLink = (url:string) => window.open(url);

    let messageData:any = message;

    switch (variant) {
        case 'link':
            messageData = Link(link, onClickToLink)
            break;
        case 'call':
            messageData = Audio(link);
            break;
        case 'attachment':
            messageData = message.includes('video')
                ? Image(VideoIcon, '100px', onClickToLink)
                : Image(link, '200px', onClickToLink);
            break;
        default:
            break;
    }

    return (
        <>
            {type
                ? <RightItem {...{messageData, published}}/>
                : <LeftItem {...{messageData, published, read_by}}/>
            }
        </>
    );
};

const Audio = (links: Array<string> | string) => {
    return (
        <>
            {Array.isArray(links) ?
                links.map((el,index) =>
                    <audio key={index} style={{height: '20px', marginRight: '10px'}} controls className="player"
                           preload="false">
                        <source src={el}/>
                    </audio>)
                :
                <audio style={{height: '20px', marginRight: '10px'}} controls className="player"
                       preload="false">
                    <source src={links}/>
                </audio>
            }
        </>
    )
}


const SpanLink = styled.span`
   word-break: break-word;
   text-decoration: underline;
   cursor: pointer;
`;

const Image = (links: Array<string> | string, width: string, onClick: (url:string) => void) => {
    return (
        <>
            {Array.isArray(links)
                ? links.map((el,index) => <img key={index} onClick={onClick.bind(null,el)} style={{width,marginTop:5}} src={el} alt="Image"/>)
                : <img onClick={onClick.bind(null,links)} style={{width}} src={links} alt="Image"/>
            }
        </>
    )
}
const Link = (links: Array<string> | string, onClick: (url:string) => void) => {
    return (
        <>
            {Array.isArray(links)
                ? links.map((el,index) => <SpanLink key={index} style={{marginTop:5}} onClick={onClick.bind(null,el)}>{el}</SpanLink>)
                : <SpanLink style={{}} onClick={onClick.bind(null,links)}>{links}</SpanLink>
            }
        </>
    )
};

export default React.memo(MessageItem);
