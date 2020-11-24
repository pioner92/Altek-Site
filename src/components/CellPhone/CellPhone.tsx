import React, {useEffect} from 'react';
import {initCellPhone} from "./models";
import {getDispatchersQueue} from "./ToggleAvailable/models";
import {Fax} from "./Fax";
import {BottomMenu} from "./BottomMenu";
import {useStore} from "effector-react";
import {$selectedBottomButtonIndex} from "./BottomMenu";
import {Main} from "./Main/Main";
import {Header} from "./Header/Header";
import {History} from "./History/History";
import {getCompanyName} from "../../utils/getCompanyName";

declare const window:{
    number:string
}

export const CellPhone = () => {
    const selectedIndex = useStore($selectedBottomButtonIndex)


    useEffect(() => {
        initCellPhone(window.number)
        getDispatchersQueue(getCompanyName())
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
