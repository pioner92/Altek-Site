import React, {useEffect, useState} from 'react';
import {ActionMenu} from "./ActionMenu/ActionMenu";
import {CSSTransition} from "react-transition-group";
import {ButtonMoreAndTime} from "./ButtonMoreAndTime/ButtonMoreAndTime";
import {useStore} from "effector-react";
import {
    $isClosedActionMenu,
    $isVisibleButtonMore,
    setIsVisibleActionMenu,
    setIsVisibleButtonMore
} from "./models";

type propsType = {
    date:string
    link:string
    id:number
}

export const ItemActionRightMenu:React.FC<propsType> = ({date,link,id}) => {

    const isVisibleMenuFlag = useStore($isClosedActionMenu)
    const [isVisibleMenu,setIsVisibleMenu] = useState(false)
    const [isVisibleButton,setIsVisibleButton] = useState(true)

    const openMenu = () => {
        isVisibleButton && setIsVisibleButton(false)
        // isVisibleMenu && setIsVisibleMenu(false)
    }

    useEffect(()=>{
        setIsVisibleMenu(false)
    },[isVisibleMenuFlag])

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
                <ButtonMoreAndTime date={date}/>
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
                <ActionMenu id={id} link={link}/>
            </CSSTransition>

        </div>
    );
};
