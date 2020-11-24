import React from 'react';
import {useStore} from "effector-react";
import {$selectedIndexHistoryButton, setSelectedIndexHistoryButton} from "./models/models";
import {ToggleComponent} from "../../ToggleComponent/ToggleComponent";

export const ToggleButtons = () => {

    const selectedIndex= useStore($selectedIndexHistoryButton)
    const allIndex = 0
    const missedIndex = 1

    const onClickAll = () => {
        setSelectedIndexHistoryButton(allIndex)
    }
    const onClickMissed = ()=>{
        setSelectedIndexHistoryButton(missedIndex)
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
