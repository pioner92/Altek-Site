import React, {useRef, useState} from 'react';
import play_icon from "../../../../../../../static/icons/phone-play.svg";
import download_icon from '../../../../../../../static/icons/phone-download.svg';
import trash_icon from "../../../../../../../static/icons/phone-trash.svg";
import {deleteHistoryItems} from "../../../../../api/delete-history-item";
import {$callHistory, setCallHistory} from "../../../../models";
import {useStore} from "effector-react";


type propsType = {
    link: string
    id:number
}

export const ActionMenu: React.FC<propsType> = ({link,id}) => {

    const audioRef = useRef<HTMLMediaElement>(null)
    const callHistory = useStore($callHistory)

    const playAudio = () => {
        if (audioRef.current) {
            console.log(audioRef?.current.paused)
            audioRef.current.paused ? audioRef.current?.play() : audioRef.current.pause()
        }
    }

    const onClickDelete = () => {
        setCallHistory(callHistory.filter((el)=>el.id !== id))
        deleteHistoryItems([id])
    }


    return (
        <div className="cellphone-list__item_actions">
            <div onClick={playAudio} className="cellphone-list__item_actions_item">
                <img src={play_icon} alt=""/>
                <audio ref={audioRef} hidden={true} controls>
                    <source src={link} type="audio/mpeg"/>
                </audio>
            </div>
            <div className="cellphone-list__item_actions_item">
                <img className="cellphone-list__item_actions_item" src={download_icon}
                     alt=""/>
            </div>
            <div onClick={onClickDelete} className="cellphone-list__item_actions_item">
                <img src={trash_icon} alt=""/>
            </div>
        </div>
    );
};
