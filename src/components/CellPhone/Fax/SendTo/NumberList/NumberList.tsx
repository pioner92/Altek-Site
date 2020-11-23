import React from 'react';
import {NumberItem} from "./NumberItem/NumberItem";
import {useStore} from "effector-react";
import {$faxNumberList} from "./models";

export const NumberList: React.FC = () => {
    const numberList = useStore($faxNumberList)

    if(numberList.length>0){
        return (
            <div className="cellphone-form-expansion">
                <div className="cellphone-form-expansion__list">
                    {numberList.map((el, index) => <NumberItem key={index + el}>{el}</NumberItem>)}
                </div>
            </div>
        );
    }
    else {
        return null
    }
};
