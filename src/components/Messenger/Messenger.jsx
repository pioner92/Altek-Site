import React, { useEffect } from 'react';
import MessengerContent from './MessengerContent/MessengerContent';
import Data from '../../data.json';

const Messenger = ({
    getMessageAction, messages, Fetch, sendSmsAction,
    drivers, isFetching, setDriverId, newMessage, isNewMessage, clearMessageList,
    match: { params: { id, action } },
}) => {
    useEffect(() => {
        clearMessageList();
        setDriverId(id);
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
            <MessengerContent isFetching={isFetching} drivers={drivers}
                sendSmsAction={sendSmsAction} Fetch={Fetch}
                messages={messages} id={id}/>
        </>
    );
};

export default React.memo(Messenger);
