import React from 'react';
import play_icon from "../../../../../../../static/icons/phone-play.svg";
import download_icon from '../../../../../../../static/icons/phone-download.svg';
import trash_icon from "../../../../../../../static/icons/phone-trash.svg";


export const ActionMenu = () => {
    return (
        <div className="cellphone-list__item_actions">
            <div className="cellphone-list__item_actions_item">
                <img src={play_icon} alt=""/>
            </div>
            <div className="cellphone-list__item_actions_item">
                <img src={download_icon} alt=""/>
            </div>
            <div className="cellphone-list__item_actions_item">
                <img src={trash_icon} alt=""/>
            </div>
        </div>
    );
};
