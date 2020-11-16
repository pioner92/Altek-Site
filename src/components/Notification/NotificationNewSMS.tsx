import React from 'react';
import closeIcon from "../../static/icons/close.svg";
import {Link} from "react-router-dom";

type propsType = {
    close:()=>void
    newMessage:Array<{react_link:string}>
}

export const NotificationNewSms:React.FC<propsType> = React.memo( ({close,newMessage}) => {
    const message_link = newMessage[0]?.react_link
    return (
        <div className="sms-notification">
            <div className="sms-notification__message">
                <span>Message received!</span>
            </div>
            <div className="d-flex">
                <div className="sms-notification__view">
                    <Link to={message_link} style={{textDecoration:'white'}}><span style={{color:'white'}}>View</span></Link>
                </div>
                <div  className='sms-notification__close'>
                  <img onClick={close} src={closeIcon} />
                </div>
            </div>
        </div>
    );
});
