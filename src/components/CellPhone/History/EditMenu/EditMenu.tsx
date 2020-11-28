import React from 'react';
import check_icon_active from "../../../../static/icons/phone-check-active.svg";
import download_icon from "../../../../static/icons/phone-download.svg";
import trash_icon_red from "../../../../static/icons/phone-trash-red.svg";
import download_icon_active from '../../../../static/icons/phone-download-active.svg'
import trash_icon from '../../../../static/icons/phone-trash.svg'
import check_icon from '../../../../static/icons/phone-check.svg'
import {$selectedHistoryItems, selectAllHistoryItems, unselectAllHistoryItems} from "../HistoryList/models/models";
import {useStore} from "effector-react";
import {$callHistory, setCallHistory} from "../models";
import {deleteHistoryItems} from "../../api/delete-history-item";

export const EditMenu = () => {
    const selectedHistoryItems = useStore($selectedHistoryItems)
    const callHistory = useStore($callHistory)

    const selectAll = () => {
        selectedHistoryItems.length > 0 ? unselectAllHistoryItems() : selectAllHistoryItems(callHistory)
    }

    const deleteHistoryItem = () => {
        setCallHistory([])
        unselectAllHistoryItems()
        deleteHistoryItems(selectedHistoryItems)
    }

    return (
        <div className="cellphone-history-all-actions">
            <div onClick={selectAll} className={`cellphone-history-all-actions__item ${selectedHistoryItems.length>0?'active':''}`}>
                <span>Select all</span>
                {selectedHistoryItems.length > 0 ?
                    <img src={check_icon_active} alt=""/>
                 :
                    <img src={check_icon} alt=""/>
                }
            </div>
            <div className={`cellphone-history-all-actions__item ${selectedHistoryItems.length>0?'active':''}`}>
                <span>Download</span>
                {selectedHistoryItems.length > 0 ?
                    <img src={download_icon_active} alt=""/>
                    : <img src={download_icon} alt=""/>

                }
            </div>
            <div onClick={deleteHistoryItem} className={`cellphone-history-all-actions__item ${selectedHistoryItems.length>0?'active':''}`}>
                <span>Delete</span>
                {selectedHistoryItems.length > 0 ?
                    <img src={trash_icon_red} alt=""/>
                    :
                     <img src={trash_icon} alt=""/>
                }
            </div>
        </div>
    );
};
