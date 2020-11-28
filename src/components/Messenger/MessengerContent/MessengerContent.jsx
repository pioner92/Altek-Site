import React, { useEffect, useRef, useState } from 'react';
import MessageItem from './MessageItem/MessageItem';
import Preloader from '../../../static/Preloader/Spinner-1s-200px.gif';
import { sendSMSFn } from '../../../utils/sendSMSFn';
import attachIcon from '../../../static/icons/attach.svg';
import { getFileUrl } from "../../../utils/getFileUrl";

const MessengerContent = ({
    messages, id, sendSmsAction, isFetching,
}) => {
    const [message, setMessage] = useState('');
    const chat = useRef();

    const [file,setFile] = useState('')
    const [fileUrl,setFileUrl] = useState('')

    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            sendSMSFn({
                selectedId: [id],
                sendSmsAction,
                message: e.target.value,
                isVisibleInput: true,
                isSelectedAll: false,
                isFromChat: true,
                media_url:fileUrl
            });
            setFile('')
            setMessage('');
        }
    };

    const onChangeFilePicker = (e) => {
        setFile(e.target.files[0])
        getFileUrl(e.target.files[0]).then((data)=> {
            setFileUrl(data)
        })
    }

    useEffect(() => {
        chat.current.scroll(0, chat.current.scrollHeight);
    });
    return (
        <div className="messenger-wrapper col-lg-9 col-12">
            <div className="messenger-content">
                <div ref={chat} className="messenger-chat-items scroll-view container-wrap">

                    {!isFetching || messages.length > 0
                        ? messages.map((el) => (
                            <MessageItem key={el.id} data={el}/>
                        ))
                        : <div className="preloader">
                            {/*<img src={Preloader}/>*/}
                        </div>
                    }
                </div>
                <div className="messenger-chat-input container-wrap">
                    <div className="pos-relative">
                        <input onKeyDown={onKeyDown} onChange={onChangeMessage} value={message} type="text"
                            placeholder="Message..."/>
                        <div className="messenger-chat-attach">
                            <label htmlFor='file-picker'>
                            <img  src={attachIcon} alt="Attach"/>
                                <input onChange={onChangeFilePicker}  hidden={true} id='file-picker' type='file' accept="image/png, image/jpeg, image/gif"/>
                            </label>
                                <span>{file.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(MessengerContent, ((prevProps, nextProps) => prevProps.messages === nextProps.messages));
