import React from 'react';
import microphone_icon from "../../../../static/icons/microphone.svg";
import keypad_icon from "../../../../static/icons/keypad.svg";
import pause_icon from "../../../../static/icons/pause.svg";
import transfer_icon from "../../../../static/icons/transfer-call.svg";
import add_icon from "../../../../static/icons/plus.svg";
import record_icon from "../../../../static/icons/record.svg";
import {ActionItem} from "./ActionItem";
import {setIsVisibleKeypad} from "../models/models";

export const CallActions = () => {


    const onClick = ()=>{

    }

    const showKeypad = () => {
        setIsVisibleKeypad(true)
    }

    return (
        <div className="cellphone-numpad__callActions">
            <div className="actions-row">
                <ActionItem callback={onClick} icon={microphone_icon}>Mute</ActionItem>
                <ActionItem callback={showKeypad} icon={keypad_icon}>Keypad</ActionItem>
                <ActionItem callback={onClick} icon={pause_icon}>Hold</ActionItem>
            </div>
            <div className="actions-row">
                <ActionItem callback={onClick} icon={transfer_icon}>Transfer</ActionItem>
                <ActionItem callback={onClick} icon={add_icon}>Add</ActionItem>
                <ActionItem callback={onClick} icon={record_icon}>Voicemail</ActionItem>
            </div>
        </div>
    );
};
