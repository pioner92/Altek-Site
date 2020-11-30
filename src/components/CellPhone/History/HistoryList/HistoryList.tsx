import React from 'react';
import {HistoryListItem} from "./HistoryListItem/HistoryListItem";
import {useStore} from "effector-react";
import {$callHistory} from "../models";


export const HistoryList = () => {

    const callHistory = useStore($callHistory)

    return (
        <div style={{height: 445, paddingTop: 10}} className="cellphone-list celphone-scroll-view">
            {callHistory?.map((el)=>{
                return (
                    <HistoryListItem
                        key={el.id}
                        data={el}
                    />
                )
            })}
        </div>
    );
};
