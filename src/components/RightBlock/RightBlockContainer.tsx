import React, {forwardRef} from 'react';
import socketClient from 'socket.io-client';
import Data from '../../data.json';
import {RightBlockContentContainer} from './RightBlockContentContainer';
import { useRecordingLink} from "../../utils/appCall/hooks/useMessageLink";
import {updateCallNotificationAction} from "../../Redux/Actions/UpdateDateActions/UpdateDataActions";
import {phoneDataType} from "../../utils/appCall/app/callTypes";

declare const window : {
    arrPhones:Array<phoneDataType>
    is_admin:boolean
    number:string
}

const socket = socketClient(Data.url);
// const socket = socketClient('https://ef81db6fac04.ngrok.io');


type propsType = {
    addCallHistoryLinkAction: Function
    queueStatus: boolean
    writeToStoreIsNewCallNotificationAction:Function
    updateCallNotificationAction:updateCallNotificationAction
    getCallNotificationAction:()=>void
}

export type statusDateType = {
    id: string
    name: string
}


const RightBlockContainer: React.FC<propsType> = forwardRef(({
                                                                addCallHistoryLinkAction, queueStatus,writeToStoreIsNewCallNotificationAction,
                                                                updateCallNotificationAction,getCallNotificationAction
                                                            }, ref) => {

    // const acceptHandler = (connect: Connection) => {
    //     setAnimFlag(false)
    //     writeToStoreIsNewCallNotificationAction(false)
    // }
    //
    // const callingHandler = () => {
    //     setCellPhoneStatus('Calling...')
    // }
    // const missedCallHandler = (connect:Connection) => {
    //     writeToStoreIsNewCallNotificationAction(true)
    //     updateCallNotificationAction({content:connect.parameters.From})
    // }

    useRecordingLink( socket, addCallHistoryLinkAction,window.number)

    return (
        <RightBlockContentContainer/>
    );
});

export default RightBlockContainer;
