import React from 'react';
import {driverNumpadClick} from "../models/models";

type propsType = {
    numbers: Array<number>
    onClick:(e:React.MouseEvent<HTMLDivElement>)=>void
}

export const NumbersRow: React.FC<propsType> = ({numbers,onClick}) => {


    return (
        <div className="number-row">
            {numbers.map((el) =>
                <div key={el} onClick={onClick} className="number" data-value={el}>{el}</div>
            )}
        </div>
    );
};
