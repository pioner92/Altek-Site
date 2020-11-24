import React, {useEffect, useState} from 'react';
import input_clear from "../../../static/icons/input-clear.svg";
import {$inputValueCellPhone, clearInputValueCellPhone, setInputValueCellPhone} from "./models";
import {useStore} from "effector-react";
import {SearchList} from "./SearchList/SearchList";
import {phoneDataType} from "../../../utils/appCall/app/callTypes";
import {$isVisibleDriverList} from "./SearchList/models";
import {$driverList, $filteredDriverList, setDriverList} from "./models/models";

declare const window:{
    arrPhones:Array<phoneDataType>
}


export const CellPhoneInput: React.FC = () => {

    const inputValue = useStore($inputValueCellPhone)
    const isVisibleDriverList = useStore($isVisibleDriverList)
    const drivers = useStore($filteredDriverList)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueCellPhone(e.target.value)
    }

    const clearInput = () => {
        clearInputValueCellPhone()
    }

    useEffect(()=>{
        setDriverList(window.arrPhones)
        console.log(drivers)
    },[])

    return (
        <div>
            <div className="cellphone-numpad__input">
                <input value={inputValue} onChange={onChange} type="text" placeholder="Type number or name..."/>
                <span className="numpad-clearBtn">
                    <img onClick={clearInput} src={input_clear} alt=""/>
                </span>
            </div>
            {isVisibleDriverList &&
            <SearchList values={drivers}/>
            }
        </div>
    );
};
