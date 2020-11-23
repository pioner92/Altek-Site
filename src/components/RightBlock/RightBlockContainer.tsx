import React, {forwardRef, useEffect, useImperativeHandle, useState,} from 'react';
import socketClient from 'socket.io-client';
import Data from '../../data.json';
import {RightBlockContentContainer} from './RightBlockContentContainer';
import {Connection} from "twilio-client";
import {phoneDataType} from "../../utils/appCall/app/callTypes";
import { useRecordingLink} from "../../utils/appCall/hooks/useMessageLink";
import {useAcceptAnimate} from "../../utils/appCall/hooks/useAcceptAnimate";
import {useConnect} from "../../utils/appCall/hooks/useConnect";
import {transferHandler} from "../../utils/appCall/handlers/transfer/transferHandler";
import {incomingHandlerFunction} from "../../utils/appCall/handlers/incoming/incomingHandler";
import {connectGuard} from "../../utils/appCall/connectGuard";
import {updateCallNotificationAction} from "../../Redux/Actions/UpdateDateActions/UpdateDataActions";

const socket = socketClient(Data.url);
// const socket = socketClient('https://ef81db6fac04.ngrok.io');


declare const window: {
    number: string
    arrPhones: Array<phoneDataType>
    is_admin: boolean
}

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

    const [cellPhoneInput, setCellPhoneInput] = useState('+');
    const [connect, setConnect] = useState<Connection | null>(null);
    const [btnAcceptColor, setBtnAcceptColor] = useState('');
    const [btnDeclineColor, setBtnDeclineColor] = useState('');
    const [celPhoneStatus, setCellPhoneStatus] = useState('');
    const [animFlag, setAnimFlag] = useState(false)
    const [statusData, setStatusData] = useState<statusDateType>({} as statusDateType);
    const [isConnect, setIsConnect] = useState(false);
    const [id, setId] = useState('');
    const [from, setFrom] = useState('');
    const btnAcceptActive = '#7EDC5D'
    const btnAcceptDisable = '#AEDE9E'
    const btnDeclineActive = '#EC5454'
    const btnDeclineDisable = '#EF7575'

    // const connectHandler = () => {
    //     setBtnAcceptColor(btnAcceptDisable)
    //     setBtnDeclineColor(btnDeclineActive)
    // }
    //
    // const disconnectHandler = () => {
    //     setAnimFlag(false)
    //     setIsConnect(false)
    //     setBtnAcceptColor(btnAcceptActive)
    //     setBtnDeclineColor(btnDeclineDisable)
    //     setCellPhoneStatus('Ready')
    //     setCellPhoneInput('+')
    //     setStatusData({id: '', name: ''})
    // }
    //
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
    //
    // const incomingHandler = (connect: Connection) => {
    //     incomingHandlerFunction({
    //         connect,
    //         setCellPhoneInput,
    //         connectHandler,
    //         setAnimFlag,
    //         setCellPhoneStatus,
    //         setFrom,
    //         setStatusData,
    //         isAdmin: window.is_admin,
    //         arrPhones: window.arrPhones
    //     })
    // }


    // const AppCall = new AppCallFn({
    //     setConnect,
    //     connect,
    //     setIsConnect,
    //     connectHandler,
    //     disconnectHandler,
    //     incomingHandler,
    //     acceptHandler,
    //     callingHandler,
    //     missedCallHandler
    // });
    //
    // const Call = (number: string) => {
    //     // AppCall.Call(number);
    // };
    //
    // const HungUp = () => {
    //     setStatusData({
    //         id: '',
    //         name: '',
    //     });
    //     // AppCall.HungUp();
    // };

    // useImperativeHandle(ref, () => ({
    //     setInput(data = '+') {
    //         setCellPhoneInput(data);
    //     },
    //     Call(number: string) {
    //         Call(number);
    //     },
    //     setStatusData(data: statusDateType) {
    //         setStatusData(data);
    //     },
    //     setId(_id: string) {
    //         setId(_id);
    //     },
    // }));


    // const transferFn = (number: string) => {
    //     connectGuard(connect,'open') && transferHandler({to: number, myExt: window.number, callback: HungUp, from})
    // };
    //
    // const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    //     //@ts-ignore
    //     if (e.target.className === 'number') {
    //         //@ts-ignore
    //         const number = e.target.dataset.value;
    //         // appCall.sendNumber(number)
    //         // AppCall.sendNumber(number)
    //         if (connectGuard(connect,'open')) {
    //             connect?.sendDigits(number)
    //         }
    //         setCellPhoneInput((prevState) => prevState + number);
    //     }
    // };
    //
    //
    // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setCellPhoneInput(e.target.value);
    // };
    //
    // useEffect(() => {
    //     setCellPhoneInput('+');
    //     // AppCall.initEventsListener();
    //     getCallNotificationAction()   // get call notification
    // }, []);


    // useAcceptAnimate({setBtnAcceptColor, animFlag})
    // useRecordingLink( socket, addCallHistoryLinkAction, setId,window.number)
    // useConnect({
    //     isAdmin: window.is_admin,
    //     value: isConnect,
    //     //@ts-ignore
    //     from: connect?.parameters?.From,
    //     setStatusData,
    //     setCellPhoneStatus,
    //     inputValue: cellPhoneInput
    // })
    //
    // useEffect(() => {
    //     //@ts-ignore
    //     // AppCall.initToken(window.number);
    // }, [queueStatus]);


    return (
        <RightBlockContentContainer/>
    );
});

export default RightBlockContainer;
