import React, {useEffect} from 'react';
import {CallActions} from "./CallActions/CallActions";
import {Numpad} from "./Numpad/Numpad";
import {CellPhoneInput} from "../CellPhoneInput/CellPhoneInput";
import {useStore} from "effector-react";
import {$isConnect} from "../models";
import {$isVisibleKeypad, setIsVisibleKeypad} from "./models/models";
import {CallButtons} from "./Numpad/CallButtons/CallButtons";

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
            <CallButtons/>
        </div>
    );
};
