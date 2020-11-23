import React from 'react';
import phone_history from "../../../static/icons/phone-history.svg";
import phone_fax from "../../../static/icons/phone-fax.svg";
import phone_chat from "../../../static/icons/phone-chat.svg";
import {$selectedButtonIndex, setSelectedButtonIndex} from "./models/models";
import {useStore} from "effector-react";

export const BottomMenu = () => {

    const selectedIndex = useStore($selectedButtonIndex)
    const historyIndex = 1
    const faxIndex = 2
    const chatIndex = 3

    const onSelect = (index:number) => {
        setSelectedButtonIndex(index)
    }

    const classGenerate = (index:number) =>{
        return `cellphone-bottom-menu__item${selectedIndex === index ? '-active':''}`
    }

    return (
        <div className="cellphone-bottom-menu">
            <div onClick={onSelect.bind(null,historyIndex)} className={classGenerate(historyIndex)}>
                <img src={phone_history} alt=""/>
                <span>History</span>
            </div>
            <div onClick={onSelect.bind(null,faxIndex)} className={classGenerate(faxIndex)}>
                <img src={phone_fax} alt=""/>
                <span>Fax</span>
            </div>
            <div onClick={onSelect.bind(null,chatIndex)} className={classGenerate(chatIndex)}>
                <img src={phone_chat} alt=""/>
                <span>Chat</span>
            </div>
        </div>
    );
};
