import React, {useEffect} from 'react';
import {ToggleButtons} from "./ToggleButtons/ToggleButtons";
import {HistorySearchInput} from "./HistorySearchInput/HistorySearchInput";
import {HistoryList} from "./HistoryList/HistoryList";
import {EditMenu} from "./EditMenu/EditMenu";
import {useStore} from "effector-react";
import {$isVisibleEditHistoryMenu} from "./EditMenu/models/models";
import {CSSTransition} from "react-transition-group";
import {getCallHistory} from "../api/get-call-history";

declare const window:{
    curr_user_id:number
}

export const History: React.FC = () => {

    const isVisibleEditHistoryMenu = useStore($isVisibleEditHistoryMenu)


    const history = [
        {
        author: "разработчик",
        date: "24 November 2020  08:35",
        direction: "",
        driver_name: "",
        duration: "0",
        from: "888",
        id: 143127,
        link: "https://api.twilio.com/2010-04-01/Accounts/ACea92366cacdea08cdc099ce743379dcb/Recordings/RE6da21cf7339f9555e911a2dd64aa4dc2",
        number: "+12676660389",
        status: "Missed call",
        to: "+12676660389",
    },
        {
            author: "разработчик",
            date: "24 November 2020  08:35",
            direction: "",
            driver_name: "",
            duration: "0",
            from: "888",
            id: 143128,
            link: "https://api.twilio.com/2010-04-01/Accounts/ACea92366cacdea08cdc099ce743379dcb/Recordings/RE6da21cf7339f9555e911a2dd64aa4dc2",
            number: "+12676660389",
            status: "Missed call",
            to: "+12676660389",
        }
    ]

    useEffect(() => {
        // setCallHistory(history)
        getCallHistory({})
    }, [])

    return (
        <div className="cellphone-page-body celphone-scroll-view">
            <div className="cellphone-form">
                <ToggleButtons/>
                <HistorySearchInput/>
                <CSSTransition
                    in={isVisibleEditHistoryMenu}
                    timeout={{
                        enter: 500,
                        exit: 200,
                    }}
                    classNames='call-history-edit-menu'
                    mountOnEnter
                    unmountOnExit
                >
                    <EditMenu/>
                </CSSTransition>
                <HistoryList/>
            </div>
        </div>
    );
};
