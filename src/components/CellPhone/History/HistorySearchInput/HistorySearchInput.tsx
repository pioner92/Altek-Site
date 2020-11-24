import React from 'react';
import search_icon from "../../../../static/icons/phone-search.svg";
import edit_icon from "../../../../static/icons/phone-edit.svg";
import check_icon from "../../../../static/icons/phone-check.svg";
import check_icon_active from "../../../../static/icons/phone-check-active.svg";
import download_icon from "../../../../static/icons/phone-download.svg";
import download_icon_active from "../../../../static/icons/phone-download-active.svg";
import trash_icon from "../../../../static/icons/phone-trash.svg";
import trash_icon_red from "../../../../static/icons/phone-trash-red.svg";

export const HistorySearchInput = () => {
    return (
       <>
        <div className="c-form-group">
            <div className="c-form-control">
               <div className="d-flex align-items-center">
                    <div className="cellphone-input_adv w-100">
                        <img className="cellphone-input__button_left" src={search_icon}  />
                        <input style={{paddingLeft: 35}} type="text" className="c-form-control" placeholder="Search" />
                    </div>
                    <div style={{marginLeft: 15, cursor: 'pointer'}}>
                        <img src={edit_icon} alt=""/>
                    </div>
               </div>
            </div>
        </div>
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
       </>
    );
};
