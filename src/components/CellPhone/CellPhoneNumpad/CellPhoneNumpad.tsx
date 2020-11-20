import React from 'react';
import {BottomMenu} from "../BottomMenu/BottomMenu";
import {CallActions} from "./CallActions/CallActions";
import {Numpad} from "./Numpad/Numpad";
import {CellPhoneInput} from "../CellPhoneInput/CellPhoneInput";
import {useStore} from "effector-react";
import {$isConnect} from "../models";

export const CellPhoneNumpad = () => {

    const isConnect = useStore($isConnect)

    return (
        <div className="cellphone-numpad">
            <CellPhoneInput/>
            {
                isConnect
                    ? <CallActions/>
                    : <Numpad/>
            }
            <BottomMenu/>
        </div>
    );
};
