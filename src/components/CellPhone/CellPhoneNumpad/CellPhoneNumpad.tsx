import React, {useEffect} from 'react';
import {CallActions} from "./CallActions/CallActions";
import {Numpad} from "./Numpad/Numpad";
import {CellPhoneDriverInput} from "../CellPhoneDriverInput/CellPhoneDriverInput";
import {useStore} from "effector-react";
import {$isConnect} from "../models";
import {$isVisibleKeypad, setIsVisibleKeypad} from "./models/models";
import {CallButtons} from "./CallButtons/CallButtons";
import {driverNumpadClick} from "./Numpad/models";


export const CellPhoneNumpad = () => {

    const isVisibleKeypad = useStore($isVisibleKeypad)

    const isConnect = useStore($isConnect)

    useEffect(() => {
        if (isConnect) {
            setIsVisibleKeypad(false)
        }
    }, [isConnect])

    return (
        <div className="cellphone-numpad">
            {isVisibleKeypad ?
                <>
                    <CellPhoneDriverInput/>
                    <Numpad callback={driverNumpadClick}/>
                </>
                : <CallActions/>
            }
            <CallButtons/>
        </div>
    );
};
