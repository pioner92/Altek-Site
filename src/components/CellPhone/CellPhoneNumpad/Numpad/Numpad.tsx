import React from 'react';
import {NumbersRow} from "./NumbersRow/NumbersRow";

type propsType = {
    callback:(value:string)=>void
}

export const Numpad: React.FC<propsType> = ({callback}) => {

    const onClickNumber = (e: React.MouseEvent<HTMLDivElement>) => {
        const value = e.currentTarget.dataset.value as string
        callback(value)
    }

    return (
        <div className="cellphone-numpad__numpad">
            <NumbersRow onClick={onClickNumber} numbers={[1, 2, 3]}/>
            <NumbersRow onClick={onClickNumber} numbers={[4, 5, 6]}/>
            <NumbersRow  onClick={onClickNumber} numbers={[7, 8, 9]}/>
            <div className="number-row">
                <div onClick={onClickNumber} style={{color: '#9DA8B2'}} className="number" data-value="*">*</div>
                <div className="number" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onClick={onClickNumber} data-value="0">
                    <span style={{marginTop: -8}}>0</span>
                    <span className="plus-under-zero">+</span>
                </div>
                <div onClick={onClickNumber} style={{color: '#9DA8B2'}} className="number" data-value="#">#</div>
            </div>
        </div>
    );
};
