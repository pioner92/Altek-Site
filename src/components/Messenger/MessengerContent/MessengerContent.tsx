import React, {useCallback, useEffect, useRef, useState} from 'react';
import MessageItem from './MessageItem/MessageItem';
import Preloader from '../../../static/Preloader/Spinner-1s-200px.gif';
import { sendSMSFn } from '../../../utils/sendSMSFn';
import attachIcon from '../../../static/icons/attach.svg';
import { getFileUrl } from "../../../utils/getFileUrl";
import {messagesType} from "../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";

type propsType = {
    id:string
    isFetching:boolean
    sendSmsAction:Function
    messages:Array<messagesType>
}

const MessengerContent:React.FC<propsType> = ({messages, id, sendSmsAction, isFetching}) => {
    const [message, setMessage] = useState('');
    const chat = useRef<HTMLDivElement>(null);

    const [file,setFile] = useState<File>({} as File)
    const [fileUrl,setFileUrl] = useState('')

    const onChangeMessage =  (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }

    const onKeyDown = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            sendSMSFn({
                selectedId: [id],
                sendSmsAction,
                //@ts-ignore
                message: e.target.value,
                isVisibleInput: true,
                isSelectedAll: false,
                isFromChat: true,
                media_url:fileUrl
            });
            setFile({} as File)
            setMessage('');
        }
    };

    const onChangeFilePicker = (e:React.ChangeEvent<HTMLInputElement>) => {
        const files = (e.target.files as FileList)
        const file:File = files[0]
        setFile(file)
        getFileUrl(file).then((data)=> {
            setFileUrl(data)
        })
    }

    useEffect(() => {
        if(chat.current){
            chat.current.scroll(0, chat.current.scrollHeight);
        }
    });
    return (
        <div className="messenger-wrapper col-lg-9 col-12">
            <div className="messenger-content">
                <div ref={chat} className="messenger-chat-items scroll-view container-wrap">

                    {!isFetching || messages.length > 0
                        ? messages.map((el) => (
                            //@ts-ignore
                            <MessageItem key={el.id} data={el}/>
                        ))
                        : <div className="preloader">
                            {/*<img src={Preloader}/>*/}
                        </div>
                    }
                </div>
                <div className="messenger-chat-input container-wrap">
                    <div className="pos-relative">
                        <textarea onKeyUp={onKeyDown}  onChange={onChangeMessage} value={message}
                            placeholder="Message..."/>
                        <div className="messenger-chat-attach">
                            <label htmlFor='file-picker'>
                            <img  src={attachIcon} alt="Attach"/>
                                <input onChange={onChangeFilePicker}  hidden={true} id='file-picker' type='file' accept="image/png, image/jpeg, image/gif"/>
                            </label>
                                <span>{'name' in file && file.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(MessengerContent, ((prevProps, nextProps) => prevProps.messages === nextProps.messages));
