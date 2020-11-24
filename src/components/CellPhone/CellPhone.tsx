import React, {useEffect} from 'react';
import {initCellPhone, initEventListeners} from "./models";
import {getDispatchersQueue} from "./ToggleAvailable/models";
import {Fax} from "./Fax";
import {BottomMenu} from "./BottomMenu";
import {useStore} from "effector-react";
import {$selectedButtonIndex} from "./BottomMenu";
import {Main} from "./Main/Main";
import {Header} from "./Header/Header";
import {History} from "./History/History";

export const CellPhone = () => {
    const selectedIndex = useStore($selectedButtonIndex)

    useEffect(() => {
        initCellPhone('888')
        initEventListeners()
        getDispatchersQueue('cnu')
    }, [])

    return (
        <div className="cellphone" id="cellphone">
            <Header/>
            {selectedIndex === 0 && <Main/>}
            {selectedIndex === 1 && <History/>}
            {selectedIndex === 2 && <Fax/>}
            <BottomMenu/>
        </div>
    );
};
