import React from 'react';
import phone_history from "../../../static/icons/phone-history.svg";
import {$selectedBottomButtonIndex, setSelectedBottomButtonIndex} from "./models/models";
import phone_fax from "../../../static/icons/phone-fax.svg";
import phone_chat from "../../../static/icons/phone-chat.svg";
import phone_history_active from "../../../static/icons/phone-history-active.svg";
import phone_fax_active from "../../../static/icons/phone-fax-active.svg";
import phone_chat_active from "../../../static/icons/phone-chat-active.svg";
import phone_badge from "../../../static/icons/phone-badge.svg";
import {useStore} from "effector-react";

export const BottomMenu = () => {

    const selectedIndex = useStore($selectedBottomButtonIndex)
    const historyIndex = 1
    const faxIndex = 2
    const chatIndex = 3

    const onSelect = (index:number) => {
        setSelectedBottomButtonIndex(index)
    }

    const classGenerate = (index:number) =>{
        return `cellphone-bottom-menu__item${selectedIndex === index ? ' active':''}`
    }

    return (
        <div className="cellphone-bottom-menu">
            <div onClick={onSelect.bind(null,historyIndex)} className={classGenerate(historyIndex)}>
                <div className="pos-relative">
                    <img src={selectedIndex===historyIndex ? phone_history_active : phone_history} alt=""/>
                    <div className="c-badge"><img src={phone_badge} alt=""/></div>
                </div>
                <span>History</span>
            </div>
            <div onClick={onSelect.bind(null,faxIndex)} className={classGenerate(faxIndex)}>
                <div className="pos-relative">
                    <img src={selectedIndex===faxIndex ? phone_fax_active : phone_fax} alt=""/>
                    {/* <div className="c-badge"><img src={phone_badge} alt=""/></div> */}
                </div>
                <span>Fax</span>
            </div>
            <div onClick={onSelect.bind(null,chatIndex)} className={classGenerate(chatIndex)}>
                <div className="pos-relative">
                    <img src={selectedIndex===chatIndex ? phone_chat_active : phone_chat} alt=""/>
                    <div className="c-badge"><img src={phone_badge} alt=""/></div>
                </div>
                <span>Chat</span>
            </div>
        </div>
    );
};
