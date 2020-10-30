import React, { useContext, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import NotificationNewSms from './NotificationNewSMS';
import NotificationSendSms from './NotificationSendSms';
import { Context } from '../Context/Context';

const Notification = ({ newMessage, isNewMessage, resetStatusNewMessageAction }) => {
    const {
        isVisibleSentSmsNotification, setIsVisibleSentSmsNotification,
    } = useContext(Context);

    const onClickCloseNewSmsNotif = () => resetStatusNewMessageAction();

    const onClickCloseSendSmsNotif = () => setIsVisibleSentSmsNotification(false);

    useEffect(() => {
        if (isNewMessage) {
            const timer = setTimeout(() => {
                resetStatusNewMessageAction();
                clearTimeout(timer);
            }, 10000);
        }
    }, [isNewMessage]);

    useEffect(() => {
        if (isVisibleSentSmsNotification) {
            const timer = setTimeout(() => {
                setIsVisibleSentSmsNotification(false);
                clearTimeout(timer);
            }, 1000);
        }
    }, [isVisibleSentSmsNotification]);

    return (
        <div className="sms-notification-block">
            <CSSTransition
                in={isNewMessage}
                timeout={{
                    enter: 200,
                    exit: 100,
                }}
                classNames='new-sms'
                mountOnEnter
                unmountOnExit
            >
                <NotificationNewSms newMessage={newMessage} close={onClickCloseNewSmsNotif}/>
            </CSSTransition>

            <CSSTransition
                in={isVisibleSentSmsNotification}
                timeout={{
                    enter: 200,
                    exit: 100,
                }}
                classNames='new-sms'
                mountOnEnter
                unmountOnExit
            >
                <NotificationSendSms close={onClickCloseSendSmsNotif}/>
            </CSSTransition>
        </div>
    );
};

export default React.memo(Notification, ((prevProps, nextProps) => prevProps.isNewMessage === nextProps.isNewMessage));
