import React, {useRef} from 'react';
import input_clear from "../../../../static/icons/input-clear.svg";

type propsType = {
    value:string
    onChange:(number:string)=>void
    clearInput:()=>void
    placeholder:string
}

export const Input:React.FC<propsType> = ({value,onChange,clearInput,placeholder}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        onChange(e.target.value)
    }

    const onFocus = () => {
        //@ts-ignore
        onChange(inputRef.current.value)
    }

    return (
        <div className="cellphone-numpad__input">
            <input ref={inputRef}  onFocus={onFocus}  value={value} onChange={onChangeInput} type="text" placeholder={placeholder}/>
            <span className="numpad-clearBtn">
                    <img onClick={clearInput} src={input_clear} alt=""/>
                </span>
        </div>
    );
};
