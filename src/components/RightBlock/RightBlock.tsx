import React from 'react';
import {NotificationContainer} from '../Notification/NotificationContainer';
import {connectorType} from './RightBlockContentContainer';
import {useGetDispatcherQueue} from "../../utils/hooks/useGetDispatcherQueue";
import {getCompanyName} from "../../utils/getCompanyName";
import {CellPhone} from "../CellPhone/CellPhone";
import {useRecordingLink} from "../../utils/appCall/hooks/useMessageLink";
import socketClient from "socket.io-client";
import Data from "../../data.json";
import {phoneDataType} from "../../utils/appCall/app/types";
import {$dispatchersList, setActiveDispatcherList} from "../CellPhone/TransferAndConference/models/models";
import {useStore} from "effector-react";

declare const window: {
    arrPhones: Array<phoneDataType>
    is_admin: boolean
    number: string
}

export type ownPropsType = {
    addCallHistoryLinkAction: Function
}

const socket = socketClient(Data.url, {query: {number: window.number, company: getCompanyName()}});

socket.on('connect', () => {
    console.log('CONNECT')
})

export const RightBlock: React.FC<connectorType> = React.memo(({addCallHistoryLinkAction}) => {

    const dispatchers = useStore($dispatchersList)

    useGetDispatcherQueue(dispatchers, setActiveDispatcherList)
    useRecordingLink(socket, addCallHistoryLinkAction, window.number)


    return (
        <div style={{padding: 0}} className="col-lg-3 col-12 cellphone-wrapper">
            <CellPhone/>
            <NotificationContainer/>
        </div>
    );
});
