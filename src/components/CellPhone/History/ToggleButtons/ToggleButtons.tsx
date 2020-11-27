import React from 'react';
import {useStore} from "effector-react";
import {$selectedIndexHistoryButton, setSelectedIndexHistoryButton} from "./models/models";
import {ToggleComponent} from "../../ToggleComponent/ToggleComponent";
import {getCallHistory} from "../../api/get-call-history";

export const ToggleButtons = () => {

    const selectedIndex= useStore($selectedIndexHistoryButton)
    const allIndex = 0
    const missedIndex = 1

    const onClickAll = () => {
        setSelectedIndexHistoryButton(allIndex)
        getCallHistory()
    }
    const onClickMissed = ()=>{
        setSelectedIndexHistoryButton(missedIndex)
        getCallHistory('Missed call')
    }

    return (
        <ToggleComponent
            leftCallback={onClickAll}
            rightCallback={onClickMissed}
            leftTitle='All'
            rightTitle='Missed'
            flag={selectedIndex===allIndex}
        />
    );
};
