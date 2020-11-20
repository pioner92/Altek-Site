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
    cellPhoneInput: string,
    Call: Function,
    HungUp: Function
    status: string
    btnAcceptColor: string
    btnDeclineColor: string
    statusData: { id: string, name: string }
    onClickHandler: Function
    onChangeHandler: Function
    transferFn: Function
    connect: Connection | null
}

export const RightBlock: React.FC<connectorType> = ({
                                                cellPhoneInput, Call, HungUp, status,
                                                btnAcceptColor, btnDeclineColor, statusData,
                                                onClickHandler, onChangeHandler,
                                                getActiveDispatchersAction, activeDispatchers,
                                                writeToStoreActiveDispatchersAction, dispatchers, transferFn, connect,
                                            }) => {

    const faxInputRef = useRef<HTMLInputElement>(null)
    const refTransferBtn = useRef<HTMLDivElement>(null);

    const [isVisibleList, setIsVisibleList] = useState(false);
    const [faxMedia, setFaxMedia] = useState(null)

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        onClickHandler(e);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeHandler(e);
    };
    const call = () => {
        Call(cellPhoneInput);
    };

    const onOpenList = () => {
        // @ts-ignore
        refTransferBtn.current!.style.backgroundColor = '#85B4E7';
        if (connectGuard(connect, 'open')) {
            // @ts-ignore
            !window.is_admin && setIsVisibleList(true);
        }
    };
    const onCloseListEndTransfer = (number: string) => {
        setIsVisibleList(false);
        transferFn(number);
    };

    useEffect(() => {
        // @ts-ignore
        const companyName: string = getCompanyName()
        if (companyName) {
            getActiveDispatchersAction(companyName);
        }
    }, []);


    const getInputMedia = (e: React.ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        setFaxMedia(e.target.files[0])
    }


    useEffect(() => {
        if (faxMedia !== null) {
            const formData = new FormData();
            //@ts-ignore
            formData.append('file', faxMedia, 'FAX')

            fetch('http://localhost:8082/send_fax', {
                method: 'POST',
                body: formData
            }).then(() => {
                faxInputRef!.current!.value = ''
            })
        }
    }, [faxMedia])

    useEffect(() => {
        if (status == 'Ready') {
            setIsVisibleList(false);
            // refTransferBtn.current!.style.backgroundColor = '#C7C6C5';
        }
    }, [status]);

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
