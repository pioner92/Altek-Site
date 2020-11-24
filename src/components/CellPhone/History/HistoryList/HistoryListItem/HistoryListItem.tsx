import React from 'react';
import {ItemActionRightMenu} from "./ItemActionRightMenu/ItemActionRightMenu";
import {Avatar} from "./Avatar";

export const HistoryListItem = () => {
    return (
        <div className="cellphone-list__item">
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
