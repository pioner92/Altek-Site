import React, {useEffect} from 'react';
import {ToggleAvailable} from "./ToggleAvailable/ToggleAvailable";
import {StatusBlock} from "./StatusBlock/StatusBlock";
import {CellPhoneNumpad} from "./CellPhoneNumpad/CellPhoneNumpad";
import {initCellPhone, initEventListeners} from "./models/models";

export const CellPhone = () => {

    useEffect(()=>{
        initCellPhone('888')
        initEventListeners()
    },[])

    return (
        <div className="cellphone" id="cellphone">
            <ToggleAvailable/>
            <StatusBlock/>
            <CellPhoneNumpad/>
        </div>
    );
};
