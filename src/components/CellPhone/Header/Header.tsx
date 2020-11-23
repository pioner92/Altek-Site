import React from 'react';
import {BackSvg} from "./BackSvg";
import {$selectedButtonIndex, setSelectedButtonIndex} from "../BottomMenu/models/models";
import {useStore} from "effector-react";

export const Header: React.FC = () => {

    const selectedIndex = useStore($selectedButtonIndex)

    const onClickBack = () => {
        setSelectedButtonIndex(0)
    }

    const titleGenerate = () => {
        switch (selectedIndex) {
            case 0:
                return null;
            case 1:
                return 'History'
            case 2:
                return 'Send a fax'
            case 3:
                return 'Chat'
        }
    }

    if (selectedIndex !== 0) {
        return (
            <div className="cellphone-page-header">
                <div onClick={onClickBack}>
                    <BackSvg/>
                    <span>Back</span>
                </div>
                <span className="cellphone-page-header__title">{titleGenerate()}</span>
            </div>
        );
    } else {
        return null
    }

};
