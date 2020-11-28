import React, {useEffect} from 'react';
import {$inputValueCellPhone, clearInputValueCellPhone, setInputValueCellPhone} from "./models";
import {useStore} from "effector-react";
import {DriverSearchList} from "./SearchList/DriverSearchList";
import {$isBlockedDriverList, $isVisibleDriverList} from "./SearchList/models";
import { $filteredDriverList, setDriverList} from "./models/models";
import {phoneDataType} from "../../../utils/appCall/app/types";
import {Input} from "../ui/Input/Input";

declare const window : {
    arrPhones:Array<phoneDataType>
    is_admin:boolean
    number:string
}

export const CellPhoneDriverInput: React.FC = () => {

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
            <Input value={inputValue} onChange={onChange} clearInput={clearInput} placeholder={'Type number or name...'}/>
            {isVisibleDriverList && !isBlockedDriverList &&
            <DriverSearchList values={drivers}/>
            }
        </div>
    );
};
