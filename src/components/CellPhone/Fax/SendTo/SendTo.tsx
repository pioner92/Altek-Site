import React from 'react';
import plus_icon from "../../../../static/icons/phone-plus.svg";
import {useStore} from "effector-react";
import {$inputValueFaxSendTo, setInputValueFaxSendTo} from "./models";
import {NumberList} from "./NumberList/NumberList";
import {addFaxNumber} from "./NumberList/models";

export const SendTo = () => {

    const inputValue = useStore($inputValueFaxSendTo)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValueFaxSendTo(e.target.value)
    }

    const addNumber = () => {
        addFaxNumber(inputValue)
    }

    return (
        <div className="c-form-group">
            <label htmlFor="send_to" className="c-form-control">Send to</label>
            <div className="cellphone-input_adv">
                <input onChange={onChange} value={inputValue} id="send_to" type="text"
                       className="c-form-control with-expansion" placeholder="Phone number"/>
                <img onClick={addNumber} className="cellphone-input__button" src={plus_icon}/>
            </div>
            <NumberList/>
        </div>
    );
};
