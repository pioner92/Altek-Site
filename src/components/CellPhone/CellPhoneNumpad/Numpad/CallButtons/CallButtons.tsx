import React from 'react';
import accept_call from "../../../../../static/icons/accpet-call.svg";
import decline_call from "../../../../../static/icons/decline-call.svg";
import {$isConnect, callEvent, declineEvent} from "../../../models/models";
import {useStore} from "effector-react";
import {$inputValueCellPhone} from "../../../CellPhoneInput/models";

export const CallButtons = () => {

    const inputValue = useStore($inputValueCellPhone)
    const isConnect = useStore($isConnect)

    const onClickAccept = () => {
        callEvent(inputValue)
    }

    const onClickDecline = () => {
        declineEvent()
    }

    return (
        <div className="number-action-buttons">
            { !isConnect &&
            <div onClick={onClickAccept} className="number-action-button accteptBtn">
                <img src={accept_call} alt=""/>
            </div>}
            <div onClick={onClickDecline} className="number-action-button declineBtn">
                <img src={decline_call} alt=""/>
            </div>
        </div>
    );
};
