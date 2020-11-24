import React from 'react';
import search_icon from "../../../../static/icons/phone-search.svg";

export const HistorySearchInput = () => {
    return (
        <div className="c-form-group">
            <div className="c-form-control">
                <div className="cellphone-input_adv">
                    <img className="cellphone-input__button_left" src={search_icon}  />
                    <input style={{paddingLeft: 35}} type="text" className="c-form-control" placeholder="Search" />
                </div>
            </div>
        </div>
    );
};
