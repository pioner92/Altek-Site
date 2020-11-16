import React from 'react';
import closeIcon from '../../static/icons/close.svg';

type propsType = {
    close:()=>void
}

export const NotificationSendSms:React.FC<propsType> = React.memo( ({ close }) => (
    <div className="sms-notification">
        <div className="sms-notification__message">
            <span>SMS has been sent!</span>
        </div>
        <div className="d-flex">
            <div className='sms-notification__close'>
                <img onClick={close} src={closeIcon} />
            </div>
        </div>
    </div>
));
