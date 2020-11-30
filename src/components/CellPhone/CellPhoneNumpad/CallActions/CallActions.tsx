import React, {useEffect, useState} from 'react';

import microphone_icon from "../../../../static/icons/microphone.svg";
import keypad_icon from "../../../../static/icons/keypad.svg";
import pause_icon from "../../../../static/icons/pause.svg";
import transfer_icon from "../../../../static/icons/transfer-call.svg";
import add_icon from "../../../../static/icons/plus.svg";
import record_icon from "../../../../static/icons/record.svg";

import microphone_icon_active from "../../../../static/icons/microphone-active.svg";
import pause_icon_active from "../../../../static/icons/pause-active.svg";

import {ActionItem} from "./ActionItem";
import {setIsVisibleKeypad} from "../models/models";
import {setIsVisibleBackButton} from "../CallButtons/models/models";
import {setIsVisibleConference, setIsVisibleTransfer} from "../../TransferAndConference/models/models";
import {useStore} from "effector-react";
import {$callApp, $isConnect} from "../../models";

export const CallActions = () => {

    const [isMuted, setIsMuted] = useState(false)
    const [isHold, setIsHold] = useState(false)

    const isConnect = useStore($isConnect)
    const callApp = useStore($callApp)

    const onClick = () => {
        callApp.mute(true)
    }

    const setMute = () => {
        setIsMuted(!callApp.isMuted())
        callApp.mute(!callApp.isMuted())
    }

    const setHold = () => {
        setIsHold((prevState => !prevState))
    }

    const onClickTransfer = () => {
        isConnect && setIsVisibleTransfer(true)
    }

    const onClickAdd = () => {
        if (isConnect) {
            setIsVisibleTransfer(true)
            setIsVisibleConference(true)
        }
    }

    const showKeypad = () => {
        if (isConnect) {
            setIsVisibleKeypad(true)
            setIsVisibleBackButton(true)
        }
    }

    useEffect(()=>{
        setIsMuted(callApp.isMuted())
    },[])

    return (
        <div className="cellphone-numpad__callActions">
            <div className="actions-row">
                <ActionItem isActive={isMuted} callback={setMute}
                            icon={isMuted ? microphone_icon_active : microphone_icon}>Mute</ActionItem>
                <ActionItem callback={showKeypad} icon={keypad_icon}>Keypad</ActionItem>
                <ActionItem isActive={isHold} callback={setHold} icon={isHold?pause_icon_active:pause_icon}>Hold</ActionItem>
            </div>
            <div className="actions-row">
                <ActionItem callback={onClickTransfer} icon={transfer_icon}>Transfer</ActionItem>
                <ActionItem callback={onClickAdd} icon={add_icon}>Add</ActionItem>
                <ActionItem callback={onClick} icon={record_icon}>Voicemail</ActionItem>
            </div>
        </div>
    );
};
