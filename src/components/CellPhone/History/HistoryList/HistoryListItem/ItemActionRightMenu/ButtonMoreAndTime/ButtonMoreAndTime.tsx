import React from 'react';
import more_icon from "../../../../../../../static/icons/more.svg";

export const ButtonMoreAndTime = () => {
    return (
        <>
            <div className="cellphone-list__item_meta">
                <span>15:53</span>
            </div>
            <div className="cellphone-list__item_more">
                <img src={more_icon} alt=""/>
            </div>
        </>
    );
};
