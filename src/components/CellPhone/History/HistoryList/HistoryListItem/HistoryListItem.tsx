import React from 'react';
import {ItemActionRightMenu} from "./ItemActionRightMenu/ItemActionRightMenu";
import {Avatar} from "./Avatar";
import {CSSTransition} from "react-transition-group";
import {useStore} from "effector-react";
import {$isVisibleEditHistoryMenu} from "../../EditMenu/models/models";
import {CheckBox} from "./CheckBox/CheckBox";

export const HistoryListItem = () => {

    const isVisibleEditHistoryMenu = useStore($isVisibleEditHistoryMenu)

    return (
        <div className="cellphone-list__item">
            <CSSTransition
                in={isVisibleEditHistoryMenu}
                timeout={{
                    enter: 500,
                    exit: 200,
                }}
                classNames='call-history-checkbox'
                mountOnEnter
                unmountOnExit
            >
                <CheckBox checked={true}/>
            </CSSTransition>

            <Avatar/>
            <div className="cellphone-list__item_body">
                <div className="cellphone-list__item_name">
                    <div className="title red">
                        <span>Damien Jones</span>
                    </div>
                    <div className="subtitle">
                        <span>Outcoming (1 min)</span>
                    </div>
                </div>
                <ItemActionRightMenu/>
            </div>
        </div>
    );
};
