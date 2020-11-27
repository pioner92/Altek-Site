import React, {useEffect} from 'react';
import {initCellPhone} from "./models";
import {getDispatchersQueue} from "./ToggleAvailable/models";
import {Fax} from "./Fax";
import {$selectedBottomButtonIndex, BottomMenu} from "./BottomMenu";
import {useStore} from "effector-react";
import {Main} from "./Main/Main";
import {Header} from "./Header/Header";
import {getCompanyName} from "../../utils/getCompanyName";
import {History} from "./History/History";
import {setIsVisibleActionMenu} from "./History/HistoryList/HistoryListItem/ItemActionRightMenu/models";
import {getNewNotification} from "./api/get-notification";

declare const window: {
    number: string
}

export const CellPhone = () => {
    const selectedIndex = useStore($selectedBottomButtonIndex)


    useEffect(() => {
        initCellPhone(window.number)
        getDispatchersQueue(getCompanyName())
        getNewNotification()
    }, [])

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        //@ts-ignore
        const className = e.target.className as string
        if (className && !className.includes('cellphone-list__item_actions')) {
            setIsVisibleActionMenu()
        }
    }

    return (
        <div style={{height:775}} onClick={onClick} className="cellphone" id="cellphone">
            <Header/>
            {selectedIndex === 0 && <Main/>}
            {selectedIndex === 1 && <History/>}
            {selectedIndex === 2 && <Fax/>}
            <BottomMenu/>
        </div>
    );
};
