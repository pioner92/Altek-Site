import React, {useState} from 'react';
import {$isAvailable, setDispatcherQueue, setIsAvailable} from "./models/models";
import {useStore} from "effector-react";

declare const window:{
    number:string
    location:any
}

export const ToggleAvailable = () => {

    const isAvailable = useStore($isAvailable)
    // const companyName = window.location.host.match(/([a-z]+)./)[1]

    const setDispatcherQueueService = (status:boolean) => {
        setDispatcherQueue({phone:window.number,status:status,companyName:'cnu'})
    }

    const onClickAvailable = (status:boolean) => {
        setIsAvailable(status)
        setDispatcherQueueService(status)
    }


    return (
        <div className="cellphone-availability">
            <div onClick={onClickAvailable.bind(null,true)} className={`cellphone-availability-btn ${isAvailable && 'active'}`}>
                <span>Available</span>
            </div>
            <div onClick={onClickAvailable.bind(null,false)} className={`cellphone-availability-btn ${!isAvailable && 'active'}`}>
                <span>Unavailable</span>
            </div>
        </div>
    );
};
