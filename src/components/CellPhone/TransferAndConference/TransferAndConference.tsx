import React from 'react';
import {Numpad} from "../CellPhoneNumpad/Numpad/Numpad";
import {CellPhoneDispatcherInput} from "./CellPhoneDispatcherInput/CellPhoneDispatcherInput";
import { setIsVisibleConference, setIsVisibleTransfer} from "./models";
import {CircleButton} from "../ui/CircleButton/CircleButton";
import back from "../../../static/icons/back-cellphone.svg";
import {ActionButtons} from "./ActionButtons/ActionButtons";
import {dispatcherNumpadClick} from "../CellPhoneNumpad/Numpad/models";


export const TransferAndConference = () => {

    const onClickBack = () => {
        setIsVisibleConference(false)
        setIsVisibleTransfer(false)
    }


    return (
        <div>
            <CellPhoneDispatcherInput/>
            <Numpad callback={dispatcherNumpadClick}/>
            <div className="number-action-buttons">
                <div className="number-action-buttons__left">
                    <CircleButton title={''} onClick={onClickBack} icon={back} className={'number-action-button backBtn'}/>
                </div>
                <ActionButtons/>
            </div>
        </div>
    );
};
