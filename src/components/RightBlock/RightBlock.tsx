import React, {useEffect, useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import Connection from 'twilio-client/es5/twilio/connection';
import {NotificationContainer} from '../Notification/NotificationContainer';
import {SearchList} from '../SearchList/SearchList';
import {connectorType} from './RightBlockContentContainer';

// @ts-ignore
import {IsAdmin} from '../Validate/isAdmin';
import {connectGuard} from "../../utils/appCall/connectGuard";
import {useGetQueue} from "../../utils/hooks/useGetQueue";
import {getCompanyName} from "../../utils/getCompanyName";
import {CellPhone} from "../CellPhone/CellPhone";

export type ownPropsType = {
}

export const RightBlock: React.FC<connectorType> = ({
                                                getActiveDispatchersAction, activeDispatchers,
                                                writeToStoreActiveDispatchersAction,dispatchers
                                            }) => {


    const [isVisibleList, setIsVisibleList] = useState(false);

    //
    // const onOpenList = () => {
    //     // @ts-ignore
    //     refTransferBtn.current!.style.backgroundColor = '#85B4E7';
    //     if (connectGuard(connect, 'open')) {
    //         // @ts-ignore
    //         !window.is_admin && setIsVisibleList(true);
    //     }
    // };
    const onCloseListEndTransfer = (number: string) => {
        setIsVisibleList(false);
        // transferFn(number);
    };

    useEffect(() => {
        // @ts-ignore
        const companyName: string = getCompanyName()
        if (companyName) {
            getActiveDispatchersAction(companyName);
        }
    }, []);


    useGetQueue(dispatchers, writeToStoreActiveDispatchersAction)

    return (
        <div className="col-lg-3 col-12 cellphone-wrapper">
           <CellPhone/>
            <IsAdmin flag={false}>
                <CSSTransition
                    in={isVisibleList}
                    timeout={{
                        enter: 200,
                        exit: 200,
                    }}
                    classNames='dispatcher-list'
                    mountOnEnter
                    unmountOnExit
                >
                    <SearchList
                        listBorder={true}
                        border={false}
                        height='180px'
                        width='261px'
                        data={activeDispatchers}
                        placeholder='Dispatcher name'
                        selectedLineColor={'#0079FE'}
                        outValueName='email'
                        callback={onCloseListEndTransfer}
                    />
                </CSSTransition>
            </IsAdmin>
            <IsAdmin flag={true}>
                <SearchList
                    listBorder={true}
                    border={false}
                    height='180px'
                    width='261px'
                    data={activeDispatchers}
                    placeholder='Dispatcher name'
                    selectedLineColor={'#0079FE'}
                    outValueName='email'
                    callback={onCloseListEndTransfer}
                />
            </IsAdmin>
            <NotificationContainer/>
        </div>
    );
};
