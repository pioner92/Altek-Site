import React from 'react';
import {NumbersRow} from "./NumbersRow/NumbersRow";
import {numpadNumberClick} from "./models/models";
import {CallButtons} from "./CallButtons/CallButtons";

export const Numpad: React.FC = () => {

    const onClickNumber = (e: React.MouseEvent<HTMLDivElement>) => {
        const value = e.currentTarget.dataset.value as string
        numpadNumberClick(value)
    }

    return (
        <div className="cellphone-numpad__numpad">
            <NumbersRow onClick={onClickNumber} numbers={[1, 2, 3]}/>
            <NumbersRow onClick={onClickNumber} numbers={[4, 5, 6]}/>
            <NumbersRow  onClick={onClickNumber} numbers={[7, 8, 9]}/>
            <div className="number-row">
                <div onClick={onClickNumber} style={{color: '#9DA8B2'}} className="number" data-value="*">*</div>
                <div className="number" onClick={onClickNumber} data-value="0">0</div>
                <div onClick={onClickNumber} style={{color: '#9DA8B2'}} className="number" data-value="#">#</div>
            </div>
            <CallButtons/>
        </div>
    );
};
