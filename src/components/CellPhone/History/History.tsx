import React from 'react';
import {ToggleButtons} from "./ToggleButtons/ToggleButtons";
import {HistorySearchInput} from "./HistorySearchInput/HistorySearchInput";
import {HistoryList} from "./HistoryList/HistoryList";

export const History = () => {
    return (
        <div>
            <div className="cellphone-page-body" style={{paddingTop: 10, minHeight: 600}}>
                <div className="cellphone-form">
                    <ToggleButtons/>
                    <HistorySearchInput/>
                    <HistoryList/>
                </div>
            </div>
        </div>
    );
};
