import React from 'react';
import {NumbersRow} from "./NumbersRow/NumbersRow";
import back_icon from "../../../../static/icons/phone-numpad-back.svg"
import blind_transfer_icon from "../../../../static/icons/phone-blind-transfer.svg"
import headphone_icon from "../../../../static/icons/phone-headphone.svg"
import {numpadNumberClick} from "./models";

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
                <div className="number" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onClick={onClickNumber} data-value="0">
                    <span style={{marginTop: -8}}>0</span>
                    <span className="plus-under-zero">+</span>
                </div>
                <div onClick={onClickNumber} style={{color: '#9DA8B2'}} className="number" data-value="#">#</div>
            </div>
            {/* <div className="cellphone-numpad__callActions">
                <div className="actions-row">
                    <div className="action disable">
                        <div className="p-icon">
                            <img src={back_icon} alt=""/>
                        </div>
                    </div>
                    <div className="action">
                        <div className="p-icon">
                            <img src={blind_transfer_icon} alt=""/>
                        </div>
                        <span>Warm<br></br>Transfer</span>
                    </div>
                    <div className="action">
                        <div className="p-icon">
                            <img src={headphone_icon} alt=""/>
                        </div>
                        <span>Blind<br></br>Transfer</span>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
