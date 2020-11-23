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
            <div style={{justifyContent:'flex-start',alignItems:'center',padding:'0px 10px 0px 10px'}} className="cellphone-page-header">
                <div style={{width:100,display:"flex",alignItems:'center',justifyContent:'flex-start',justifySelf:'flex-start'}} onClick={onClickBack}>
                    <BackSvg/>
                    <span style={{fontFamily:'Roboto',fontWeight:500,fontSize:14,lineHeight:16}}>Back</span>
                </div>
                <span className="cellphone-page-header__title">{titleGenerate()}</span>
            </div>
        );
    } else {
        return null
    }
};
