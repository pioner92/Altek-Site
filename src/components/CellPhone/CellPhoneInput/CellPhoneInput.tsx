import React, {useEffect, useState} from 'react';
import input_clear from "../../../static/icons/input-clear.svg";
import {$inputValueCellPhone, clearInputValueCellPhone, setInputValueCellPhone} from "./models";
import {useStore} from "effector-react";
import {SearchList} from "./SearchList/SearchList";
import {$isBlockedDriverList, $isVisibleDriverList} from "./SearchList/models";
import { $filteredDriverList, setDriverList} from "./models/models";
import {phoneDataType} from "../../../utils/appCall/app/callTypes";
import {$isConnect} from "../models";

declare const window : {
    arrPhones:Array<phoneDataType>
    is_admin:boolean
    number:string
}

export const CellPhoneInput: React.FC = () => {

    const inputValue = useStore($inputValueCellPhone)
    const isVisibleDriverList = useStore($isVisibleDriverList)
    const drivers = useStore($filteredDriverList)
    const isBlockedDriverList = useStore($isBlockedDriverList)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueCellPhone(e.target.value)
    }

    const clearInput = () => {
        clearInputValueCellPhone()
    }

    useEffect(()=>{
        setDriverList(window.arrPhones)
    },[])

    return (
        <div>
            <div className="cellphone-numpad__input">
                <input value={inputValue} onChange={onChange} type="text" placeholder="Type number or name..."/>
                <span className="numpad-clearBtn">
                    <img onClick={clearInput} src={input_clear} alt=""/>
                </span>
            </div>
            {isVisibleDriverList && !isBlockedDriverList &&
            <SearchList values={drivers}/>
            }
        </div>
    );
};
