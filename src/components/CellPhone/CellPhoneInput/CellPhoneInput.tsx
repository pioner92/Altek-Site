import React from 'react';
import input_clear from "../../../static/icons/input-clear.svg";
import {$inputValueCellPhone, setInputValueCellPhone} from "./models";
import {useStore} from "effector-react";

export const CellPhoneInput:React.FC = () => {

    const inputValue = useStore($inputValueCellPhone)

    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputValueCellPhone(e.target.value)
    }

    return (
        <div className="cellphone-numpad__input">
            <input value={inputValue} onChange={onChange} type="text" placeholder="Type number or name..."/>
            <span className="numpad-clearBtn">
                <img src={input_clear} alt=""/>
            </span>
        </div>
    );
};
