import React from 'react';
import check_icon_active from "../../../../static/icons/phone-check-active.svg";
import download_icon from "../../../../static/icons/phone-download.svg";
import trash_icon_red from "../../../../static/icons/phone-trash-red.svg";

export const EditMenu = () => {
    return (
        <div className="cellphone-history-all-actions">
            <div className='cellphone-history-all-actions__item active'>
                <span>Select all</span>
                {/* <img src={check_icon} alt=""/> */}
                <img src={check_icon_active} alt=""/>
            </div>
            <div className='cellphone-history-all-actions__item'>
                <span>Download</span>
                {/* <img src={download_icon_active} alt=""/> */}
                <img src={download_icon} alt=""/>
            </div>
            <div className='cellphone-history-all-actions__item active'>
                <span>Delete</span>
                {/* <img src={trash_icon} alt=""/> */}
                <img src={trash_icon_red} alt=""/>
            </div>
        </div>
    );
};
