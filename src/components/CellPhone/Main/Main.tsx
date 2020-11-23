import React from 'react';
import {ToggleAvailable} from "../ToggleAvailable/ToggleAvailable";
import {StatusBlock} from "../StatusBlock/StatusBlock";
import {CellPhoneNumpad} from "../CellPhoneNumpad/CellPhoneNumpad";

export const Main = () => {
    return (
        <div style={{padding: 15}}>
            <ToggleAvailable/>
            <StatusBlock/>
            <CellPhoneNumpad/>
        </div>
    );
};
