import React from 'react';
import accept_call from "../../../../../static/icons/accpet-call.svg";
import decline_call from "../../../../../static/icons/decline-call.svg";
import {$isConnect, callEvent, declineEvent} from "../../../models/models";
import {useStore} from "effector-react";
import {$inputValueCellPhone} from "../../../CellPhoneInput/models";
import {
    $isVisibleAcceptButton,
    $isVisibleDeclineButton,
    onAcceptEvent,
    onDeclineEvent,
    setIsVisibleAcceptButton
} from "./models";

export const CallButtons = () => {

    const inputValue = useStore($inputValueCellPhone)
    const isVisibleAcceptButton = useStore($isVisibleAcceptButton)
    const isVisibleDeclineButton = useStore($isVisibleDeclineButton)

    const onClickAccept = () => {
        callEvent(inputValue)
        onAcceptEvent()
    }

    const onClickDecline = () => {
        declineEvent()
        onDeclineEvent()
    }

    return (
        <div className="number-action-buttons">
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
