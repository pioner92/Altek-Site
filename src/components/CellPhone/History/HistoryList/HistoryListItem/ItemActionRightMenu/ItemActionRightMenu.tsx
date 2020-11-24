import React, {useState} from 'react';
import {ActionMenu} from "./ActionMenu/ActionMenu";
import {CSSTransition} from "react-transition-group";
import {ButtonMoreAndTime} from "./ButtonMoreAndTime/ButtonMoreAndTime";

export const ItemActionRightMenu = () => {

    const [isVisibleMenu,setIsVisibleMenu] = useState(false)
    const [isVisibleButton,setIsVisibleButton] = useState(true)

    const openMenu = () => {
        isVisibleButton && setIsVisibleButton(false)
        isVisibleMenu && setIsVisibleMenu(false)
    }


    return (
        <div onClick={openMenu} className="cellphone-list__item_right">

            <CSSTransition
                in={isVisibleButton}
                timeout={{
                    enter: 300,
                    exit: 100,
                }}
                classNames='cellphone-more-button'
                mountOnEnter
                unmountOnExit
                onEnter={()=>setIsVisibleMenu(false)}
                onExited={()=>setIsVisibleMenu(true)}
            >
                <ButtonMoreAndTime/>
            </CSSTransition>
            <CSSTransition
                in={isVisibleMenu}
                timeout={{
                    enter: 300,
                    exit: 100,
                }}
                classNames='cellphone-action-menu'
                mountOnEnter
                unmountOnExit
                onEnter={()=>setIsVisibleButton(false)}
                onExited={()=>setIsVisibleButton(true)}
            >
                <ActionMenu/>
            </CSSTransition>

        </div>
    );
};
