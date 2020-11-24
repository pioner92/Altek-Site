import React from 'react';
import search_icon from "../../../../static/icons/phone-search.svg";
import edit_icon from "../../../../static/icons/phone-edit.svg";
import {$isVisibleEditHistoryMenu, setIsVisibleEditHistoryMenu} from "../EditMenu/models/models";
import {useStore} from "effector-react";

export const HistorySearchInput = () => {

    const isVisibleEditHistoryMenu = useStore($isVisibleEditHistoryMenu)

    const openEditHistoryMenu = ()=>{
        setIsVisibleEditHistoryMenu(!isVisibleEditHistoryMenu)
    }
    return (
        <>
            <div className="c-form-group">
                <div className="c-form-control">
                    <div className="d-flex align-items-center">
                        <div className="cellphone-input_adv w-100">
                            <img className="cellphone-input__button_left" src={search_icon}/>
                            <input style={{paddingLeft: 35}} type="text" className="c-form-control"
                                   placeholder="Search"/>
                        </div>
                        <div onClick={openEditHistoryMenu} style={{marginLeft: 15, cursor: 'pointer'}}>
                            <img src={edit_icon} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
