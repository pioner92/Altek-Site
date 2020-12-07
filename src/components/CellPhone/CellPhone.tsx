import React, {useEffect} from 'react';
import {$isConnect, initCellPhone} from "./models";
import {Fax} from "./Fax";
import {$selectedBottomButtonIndex, BottomMenu} from "./BottomMenu";
import {useStore} from "effector-react";
import {Main} from "./Main/Main";
import {Header} from "./Header/Header";
import {History} from "./History/History";
import {setIsVisibleActionMenu} from "./History/HistoryList/HistoryListItem/ItemActionRightMenu/models";
import {getNewNotification} from "./api/get-notification";
import {getDispatchers} from "./api/get-dispatchers";
import {getActiveDispatchers} from "./api/get-active-dispatchers";


declare const window: {
    number: string
}

export const CellPhone = React.memo(() => {
    const selectedIndex = useStore($selectedBottomButtonIndex)
    const isConnect = useStore($isConnect)

    useEffect(() => {
        initCellPhone(window.number)
        getDispatchers()
        getNewNotification()
        getActiveDispatchers()
    }, [])

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        //@ts-ignore
        const className = e.target.className as string
        if (className && !className.includes('cellphone-list__item_actions')) {
            setIsVisibleActionMenu()
        }
    }


    // useEffect(()=>{
    //     setDispatchersList([
    //         {
    //             id:1,
    //             email:'alex@test.ri',
    //             name:'Alex',
    //             phone:'887',
    //             group:'test',
    //             login:'alex'
    //         },
    //         {
    //             id:2,
    //             email:'alex@test.ru',
    //             name:'Hanna',
    //             phone:'333',
    //             group:'test',
    //             login:'alex'
    //         }
    //     ])
    // },[])

    return (
        <div style={{height:775}} onClick={onClick} className={`cellphone ${isConnect?'active':''}`} id="cellphone">
            <Header/>
            {selectedIndex === 0 && <Main/>}
            {selectedIndex === 1 && <History/>}
            {selectedIndex === 2 && <Fax/>}
            <BottomMenu/>
        </div>
    );
});
