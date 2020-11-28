import React from 'react';
import {ToggleAvailable} from "../ToggleAvailable/ToggleAvailable";
import {StatusBlock} from "../StatusBlock/StatusBlock";
import {CellPhoneNumpad} from "../CellPhoneNumpad/CellPhoneNumpad";
import {TransferAndConference} from "../TransferAndConference/TransferAndConference";
import {useStore} from "effector-react";
import {$isVisibleTransfer} from "../TransferAndConference/models/models";

export const Main = () => {
    const isVisibleTransfer = useStore($isVisibleTransfer)

    return (
        <div style={{padding: 15}}>
            <ToggleAvailable/>
            <StatusBlock/>
            {isVisibleTransfer
                ? <TransferAndConference/>
            : <CellPhoneNumpad/>
            }
        </div>
    );
};
