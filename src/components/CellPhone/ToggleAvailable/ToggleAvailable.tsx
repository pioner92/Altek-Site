import React, {useEffect} from 'react';
import {$isAvailable, setDispatcherQueue, setIsAvailable} from "./models/models";
import {useStore} from "effector-react";
import {ToggleComponent} from "../ToggleComponent/ToggleComponent";
import {initCellPhone} from "../models";

declare const window: {
    number: string
    location: any
}

export const ToggleAvailable = () => {

    const isAvailable = useStore($isAvailable)
    const companyName = window.location.host.match(/([a-z]+)./)[1]

    const setDispatcherQueueService = (status: boolean) => {
        setDispatcherQueue({phone: window.number, status: status, companyName})
    }

    const onClickAvailable = (status: boolean) => {
        setIsAvailable(status)
        setDispatcherQueueService(status)
    }

    useEffect(()=>{
        if(isAvailable){
            initCellPhone(window.number)
        }
    },[isAvailable])

    return (
        <ToggleComponent
            leftCallback={onClickAvailable.bind(null, true)}
            rightCallback={onClickAvailable.bind(null, false)}
            flag={isAvailable}
            leftTitle='Available'
            rightTitle='Unavailable'
        />
    );
};
