import React, {useEffect} from 'react';
import {initCellPhone, initEventListeners} from "./models/models";
import {getDispatchersQueue} from "./ToggleAvailable/models/models";
import {Fax} from "./Fax/Fax";
import {BottomMenu} from "./BottomMenu/BottomMenu";
import {useStore} from "effector-react";
import {$selectedButtonIndex} from "./BottomMenu/models/models";
import {Main} from "./Main/Main";
import {Header} from "./Header/Header";

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
            {selectedIndex === 2 && <Fax/>}
            <BottomMenu/>
        </div>
    );
};
