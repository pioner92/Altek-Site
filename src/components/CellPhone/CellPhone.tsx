import React, {useEffect} from 'react';
import {ToggleAvailable} from "./ToggleAvailable/ToggleAvailable";
import {StatusBlock} from "./StatusBlock/StatusBlock";
import {CellPhoneNumpad} from "./CellPhoneNumpad/CellPhoneNumpad";
import {initCellPhone, initEventListeners} from "./models/models";
import {getDispatchersQueue} from "./ToggleAvailable/models/models";
import {Fax} from "./Fax/Fax";
import {BottomMenu} from "./BottomMenu/BottomMenu";

export const CellPhone = () => {

    useEffect(()=>{
        initCellPhone('888')
        initEventListeners()
        getDispatchersQueue('cnu')
    },[])

    return (
        <div className="cellphone" id="cellphone">
            <div style={{padding: 15}}>
                <ToggleAvailable/>
                <StatusBlock/>
                <BottomMenu/>
            </div>
            <Fax/>
        </div>
    );
};
