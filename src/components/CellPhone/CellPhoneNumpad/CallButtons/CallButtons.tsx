import React from 'react';
import accept_call from "../../../../static/icons/accpet-call.svg";
import decline_call from "../../../../static/icons/decline-call.svg";
import back from '../../../../static/icons/back-cellphone.svg'
import { callEvent, declineEvent} from "../../models/models";
import {useStore} from "effector-react";
import {$inputValueCellPhone} from "../../CellPhoneInput/models";
import {
    $isVisibleAcceptButton, $isVisibleBackButton,
    $isVisibleDeclineButton,
    onAcceptEvent,
    onDeclineEvent, setIsVisibleBackButton,
} from "./models";
import {setIsVisibleKeypad} from "../models/models";

export const CallButtons = () => {

    const inputValue = useStore($inputValueCellPhone)
    const isVisibleAcceptButton = useStore($isVisibleAcceptButton)
    const isVisibleDeclineButton = useStore($isVisibleDeclineButton)
    const isVisibleBackButton = useStore($isVisibleBackButton)

    const onClickAccept = () => {
        callEvent(inputValue)
        onAcceptEvent()
    }

    const onClickDecline = () => {
        declineEvent()
        onDeclineEvent()
    }

    const onClickBack = () => {
        setIsVisibleKeypad(false)
        setIsVisibleBackButton(false)
    }

    return (
        <div className="number-action-buttons">
            {isVisibleBackButton &&
            <div onClick={onClickBack} className="number-action-button backBtn">
                <img src={back} alt=""/>
            </div>
            }
            {isVisibleAcceptButton &&
            <div onClick={onClickAccept} className="number-action-button accteptBtn">
                <img src={accept_call} alt=""/>
            </div>
            }
            {isVisibleDeclineButton &&
                <div onClick={onClickDecline} className="number-action-button declineBtn">
                <img src={decline_call} alt=""/>
                </div>
            }
        </div>
    );
};
