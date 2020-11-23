import React, {useEffect} from 'react';
import {BottomMenu} from "../BottomMenu/BottomMenu";
import {CallActions} from "./CallActions/CallActions";
import {Numpad} from "./Numpad/Numpad";
import {CellPhoneInput} from "../CellPhoneInput/CellPhoneInput";
import {useStore} from "effector-react";
import {$isConnect} from "../models";
import {$isVisibleKeypad, setIsVisibleKeypad} from "./models/models";

export const CellPhoneNumpad = () => {

    const isVisibleKeypad = useStore($isVisibleKeypad)

    const isConnect = useStore($isConnect)

    useEffect(()=>{
        if(isConnect){
            setIsVisibleKeypad(false)
        }
    },[isConnect])

    return (
        <div className="cellphone-numpad">
            <CellPhoneInput/>
            {isVisibleKeypad
                ? <Numpad/>
                : <CallActions/>
            }
            <BottomMenu/>
        </div>
    );
};
