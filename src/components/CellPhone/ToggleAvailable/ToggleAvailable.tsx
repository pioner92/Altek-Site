import React from 'react';
import {$isAvailable, setDispatcherQueue, setIsAvailable} from "./models/models";
import {useStore} from "effector-react";
import {ToggleComponent} from "../ToggleComponent/ToggleComponent";
import {initCellPhone} from "../models";
import {getCompanyName} from "../../../utils/getCompanyName";

declare const window: {
    number: string
    location: any
}

export const ToggleAvailable = () => {

    const isAvailable = useStore($isAvailable)
    const companyName = getCompanyName()

    const setDispatcherQueueService = async (status: boolean) => {
        await setDispatcherQueue({phone: window.number, status, companyName})
        initCellPhone(status ? window.number : 'null')
    }

    const onClickAvailable = (status: boolean) => {
        setIsAvailable(status)
        setDispatcherQueueService(status)
    }


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
