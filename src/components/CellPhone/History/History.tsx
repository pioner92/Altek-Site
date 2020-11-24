import React from 'react';
import {ToggleButtons} from "./ToggleButtons/ToggleButtons";
import {HistorySearchInput} from "./HistorySearchInput/HistorySearchInput";
import {HistoryList} from "./HistoryList/HistoryList";
import {EditMenu} from "./EditMenu/EditMenu";
import {useStore} from "effector-react";
import {$isVisibleEditHistoryMenu} from "./EditMenu/models/models";
import {CSSTransition} from "react-transition-group";

export const History = () => {

    const isVisibleEditHistoryMenu = useStore($isVisibleEditHistoryMenu)

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
