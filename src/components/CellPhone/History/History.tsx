import React from 'react';
import {ToggleButtons} from "./ToggleButtons/ToggleButtons";
import {HistorySearchInput} from "./HistorySearchInput/HistorySearchInput";
import {HistoryList} from "./HistoryList/HistoryList";

export const History = () => {
    return (
        <div className="cellphone-page-body celphone-scroll-view">
            <div className="cellphone-form">
                <ToggleButtons/>
                <HistorySearchInput/>
                <HistoryList/>
            </div>
        </div>
    );
};
