import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Connection from 'twilio-client/es5/twilio/connection';
import { NotificationContainer } from '../Notification/NotificationContainer';
import { SearchList } from '../SearchList/SearchList';
import { connectorType } from './CellPhoneConnectContainer';
import transfer_svg from '../../static/icons/transfer-call.svg';
// @ts-ignore
import { IsAdmin } from '../Validate/isAdmin';
import { connectGuard } from './CellPhoneContainer';
import { getDispatcherQueue } from '../../utils/callQueu/getDispatcherQueue';
import { filterActiveDispatcher } from '../../utils/callQueu/filterActiveDispatchers';

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
    connect: Connection
}

const CellPhone: React.FC<connectorType> = ({
    cellPhoneInput, Call, HungUp, status,
    btnAcceptColor, btnDeclineColor, statusData,
    onClickHandler, onChangeHandler,
    getActiveDispatchersAction, activeDispatchers,
    writeToStoreActiveDispatchersAction, dispatchers, transferFn, connect,
}) => {
    const [isVisibleList, setIsVisibleList] = useState(false);
    const refTransferBtn = useRef<HTMLDivElement>(null);
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
        if (connectGuard(connect)) {
            // @ts-ignore
            !window.is_admin && setIsVisibleList(true);
        }
    };
    const onCloseListEndTransfer = (number: string) => {
        console.log(number);
        setIsVisibleList(false);
        transferFn(number);
    };

    useEffect(() => {
        // @ts-ignore
        const companyName: string = window?.location?.host?.match(/([a-z]+)./)[1];
        if (companyName) {
            getActiveDispatchersAction(companyName);
        }
    }, []);

    const disp = [{
        email: '1212',
        group: '1212',
        id: 12,
        login: 'alex',
        name: 'alex',
        phone: '888',
    }];

    useEffect(() => {
        if (status == 'Ready') {
            setIsVisibleList(false);
            refTransferBtn.current!.style.backgroundColor = '#C7C6C5';
        }
    }, [status]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(dispatchers);
            // @ts-ignore
            const companyName: string = window?.location?.host?.match(/([a-z]+)./)[1];

            getDispatcherQueue(companyName)
                .then((data) => {
                    const newData = filterActiveDispatcher(dispatchers, data);
                    writeToStoreActiveDispatchersAction(newData);
                });
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, [dispatchers]);

    return (
        <div className="col-lg-3 col-12 cellphone-wrapper">
            <div id="cellphone">
                <div id="cellphone-info-box">
                    <span>ID: </span><span id='cellphone-info-box_id'/>{statusData.id}<br/>
                    <span>Name: </span><span id='cellphone-info-box_name'/>{statusData.name}<br/>
                    <span>Status: </span><span id='cellphone-info-box_status'>{status}</span><br/>
                    <div className="row">
                        <label htmlFor="input_phone_number" style={{ width: '50%' }}>Phone number:</label>
                        <input onFocus={onChange} onPaste={onChange as any} className="cinput_phone_number"
                            onChange={onChange}
                            value={cellPhoneInput} id='input_phone_number' type="text" style={{ width: '50%' }}/>
                    </div>

                </div>
                <div onClick={onClick} id="cellphone-numpad">
                    <div className="number-row">
                        <div className="number" data-value="1">1</div>
                        <div className="number" data-value="2">2</div>
                        <div className="number" data-value="3">3</div>
                    </div>
                    <div className="number-row">
                        <div className="number" data-value="4">4</div>
                        <div className="number" data-value="5">5</div>
                        <div className="number" data-value="6">6</div>
                    </div>
                    <div className="number-row">
                        <div className="number" data-value="7">7</div>
                        <div className="number" data-value="8">8</div>
                        <div className="number" data-value="9">9</div>
                    </div>
                    <div className="number-row">
                        <div className="number" data-value="*">*</div>
                        <div className="number" data-value="0">0</div>
                        <div className="number" data-value="#">#</div>
                    </div>
                    <div className="number-row">
                        <div style={{ backgroundColor: btnAcceptColor }} onClick={call} id="accept-call-button"><i
                            className="fas fa-phone"/></div>

                        <div style={{ backgroundColor: btnDeclineColor }} onClick={HungUp as any}
                            id="decline-call-button"><i
                                className="fas fa-phone-slash"/></div>

                        <div ref={refTransferBtn} style={{ backgroundColor: '#C7C6C5' }} onClick={onOpenList}
                            id="decline-call-button">
                            <img src={transfer_svg}/>
                        </div>
                    </div>
                </div>
            </div>
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

export default CellPhone;
