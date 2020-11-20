import React from 'react';
import phone_history from "../../../static/icons/phone-history.svg";
import phone_fax from "../../../static/icons/phone-fax.svg";
import phone_chat from "../../../static/icons/phone-chat.svg";

export const BottomMenu = () => {
    return (
        <div className="cellphone-bottom-menu">
            <div className="cellphone-bottom-menu__item">
                <img src={phone_history} alt=""/>
                <span>History</span>
            </div>
            <div className="cellphone-bottom-menu__item">
                <img src={phone_fax} alt=""/>
                <span>Fax</span>
            </div>
            <div className="cellphone-bottom-menu__item">
                <img src={phone_chat} alt=""/>
                <span>Chat</span>
            </div>
        </div>
    );
};
