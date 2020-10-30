import React from 'react';
import closeIcon from '../../static/icons/close.svg';

const NotificationSendSms = ({ close, ...props }) => (
    <div style={{ backgroundColor: props.color }} className="sms-notification">
        <div className="sms-notification__message">
            <span>SMS has been sent!</span>
        </div>
        <div className="d-flex">
            <div className='sms-notification__close'>
                <img onClick={close} src={closeIcon} />
            </div>
        </div>
    </div>
);

export default NotificationSendSms;
