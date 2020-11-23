import React from 'react';
import trash_icon from "../../../../../../static/icons/phone-trash.svg";
import {deleteFaxNumber} from "../models/models";

export const NumberItem:React.FC = ({children}) => {

    const deleteNumber= ()=>{
        deleteFaxNumber(`${children}`)
    }

    return (
        <div className="cellphone-form-expansion_list__item">
            <span>{children}</span>
            <img onClick={deleteNumber} src={trash_icon}/>
        </div>
    );
};
