import React, { useEffect } from 'react';
import MessengerContent from './MessengerContent/MessengerContent';
import Data from '../../data.json';
import {connectorType} from "./MessengerContainer";
import {messagesType} from "../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";

export type propsType = {
    match:{
        params:{
            id:string
            action:string
        }
    }
}

const Messenger:React.FC<connectorType> = ({
    getMessageAction, messages, sendSmsAction,
     isFetching, newMessage, isNewMessage, clearMessageList,
    match: { params: { id, action } }
}) => {

    useEffect(() => {
        clearMessageList();
    }, []);

    useEffect(() => {
        getMessageAction({ action, id });
    }, [id, action]);

    useEffect(() => {
        if (isNewMessage && +id === +newMessage[0].driver_id) {
            getMessageAction({ action, id });
        }
    }, [newMessage]);

    return (
        <>
            <MessengerContent
                isFetching={isFetching}
                sendSmsAction={sendSmsAction}
                messages={messages as Array<messagesType>}
                id={id}
            />
        </>
    );
};

export default React.memo(Messenger);
