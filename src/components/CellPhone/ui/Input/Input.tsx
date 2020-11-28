import React from 'react';
import input_clear from "../../../../static/icons/input-clear.svg";

type propsType = {
    value:string
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
    clearInput:()=>void
    placeholder:string
}

export const Input:React.FC<propsType> = ({value,onChange,clearInput,placeholder}) => {
    return (
        <div className="cellphone-numpad__input">
            <input value={value} onChange={onChange} type="text" placeholder={placeholder}/>
            <span className="numpad-clearBtn">
                    <img onClick={clearInput} src={input_clear} alt=""/>
                </span>
        </div>
    );
};
