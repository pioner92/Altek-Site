import React, {useEffect, useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import Connection from 'twilio-client/es5/twilio/connection';
import {NotificationContainer} from '../Notification/NotificationContainer';
import {SearchList} from '../SearchList/SearchList';
import {connectorType} from './CellPhoneConnectContainer';
import transfer_svg from '../../static/icons/transfer-call.svg';
import input_clear from '../../static/icons/input-clear.svg';
import accept_call from '../../static/icons/accpet-call.svg';
import decline_call from '../../static/icons/decline-call.svg';
import phone_history from '../../static/icons/phone-history.svg';
import phone_fax from '../../static/icons/phone-fax.svg';
import phone_chat from '../../static/icons/phone-chat.svg';
import microphone_icon from '../../static/icons/microphone.svg';
import keypad_icon from '../../static/icons/keypad.svg';
import pause_icon from '../../static/icons/pause.svg';
import transfer_icon from '../../static/icons/transfer-call.svg';
import add_icon from '../../static/icons/plus.svg';
import record_icon from '../../static/icons/record.svg';
// @ts-ignore
import {IsAdmin} from '../Validate/isAdmin';
import {connectGuard} from "../../utils/appCall/connectGuard";
import {useGetQueue} from "../../utils/hooks/useGetQueue";
import {getCompanyName} from "../../utils/getCompanyName";

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

const CellPhone: React.FC<connectorType> = ({
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

    // const disp = [{
    //     email: '1212',
    //     group: '1212',
    //     id: 12,
    //     login: 'alex',
    //     name: 'alex',
    //     phone: '888',
    // }];

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
            }).then(() => {faxInputRef!.current!.value = ''})
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
            <div className="cellphone" id="cellphone">
                <div className="cellphone-availability">
                    <div className="cellphone-availability-btn active">
                        <span>Available</span>
                    </div>
                    <div className="cellphone-availability-btn">
                        <span>Unavailable</span>
                    </div>
                </div>
                <div className="cellphone-info-box" id="cellphone-info-box">
                    <div className="cellphone-info-box__status">
                        <span className="incomming">Incomming call ◉</span>
                        <span className="connected">Connected 1:32</span>
                    </div>
                    <div className="cellphone-info-box__member">
                        <div className="cellphone-info-box__member-avatar">
                            <img src="https://image.freepik.com/free-photo/happy-man-with-newspaper_23-2147694656.jpg" alt=""/>
                        </div>
                        <div className="cellphone-info-box__member-name">
                            <span>Damien Jones</span>
                        </div>
                        <div className="cellphone-info-box__member-phone">
                            <span>+1 823 746 3456</span>
                        </div>
                        <div className="cellphone-info-box__member-meta">
                            <span>V204</span>
                        </div>
                    </div>
                    {/* <span>ID: </span><span id='cellphone-info-box_id'/>{statusData.id}<br/>
                    <span>Name: </span><span id='cellphone-info-box_name'/>{statusData.name}<br/>
                    <span>Status: </span><span id='cellphone-info-box_status'>{status}</span><br/>
                    <div className="row">
                        <label htmlFor="input_phone_number" style={{width: '50%'}}>Phone number:</label>
                        <input onFocus={onChange} onPaste={onChange as any} className="cinput_phone_number"
                               onChange={onChange}
                               value={cellPhoneInput} id='input_phone_number' type="text" style={{width: '50%'}}/>
                    </div> */}

                </div>
                <div className="cellphone-numpad">
                    <div className="cellphone-numpad__input">
                        <input type="text" placeholder="Type number or name..."/>
                        <span className="numpad-clearBtn">
                            <img src={input_clear} alt=""/>
                        </span>
                    </div>
                    <div className="cellphone-numpad__callActions">
                        <div className="actions-row">
                            <div className="action">
                                <div className="p-icon"><img src={microphone_icon} alt=""/></div>
                                <span>Mute</span>
                            </div>
                            <div className="action">
                                <div className="p-icon"><img src={keypad_icon} alt=""/></div>
                                <span>Keypad</span>
                            </div>
                            <div className="action">
                                <div className="p-icon"><img src={pause_icon} alt=""/></div>
                                <span>Hold</span>
                            </div>
                        </div>
                        <div className="actions-row">
                            <div className="action">
                                <div className="p-icon"><img src={transfer_icon} alt=""/></div>
                                <span>Transfer</span>
                            </div>
                            <div className="action">
                                <div className="p-icon"><img src={add_icon} alt=""/></div>
                                <span>Add</span>
                            </div>
                            <div className="action">
                                <div className="p-icon"><img src={record_icon} alt=""/></div>
                                <span>Voicemail</span>
                            </div>
                        </div>
                    </div>
                    <div className="cellphone-numpad__numpad">
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
                            <div style={{color: '#9DA8B2'}} className="number" data-value="*">*</div>
                            <div className="number" data-value="0">0</div>
                            <div style={{color: '#9DA8B2'}} className="number" data-value="#">#</div>
                        </div>
                        <div className="number-action-buttons">
                            <div className="number-action-button accteptBtn"><img src={accept_call} alt=""/></div>
                            <div className="number-action-button declineBtn"><img src={decline_call} alt=""/></div>
                        </div>
                    </div>
                    <div className="cellphone-bottom-menu">
                        <div className="cellphone-bottom-menu__item">
                            <img src={phone_history} alt=""/>
                            <span>History</span>
                        </div>
                        <div className="cellphone-bottom-menu__item">
                            <img src={phone_fax} alt=""/>
                            <span>Fax</span>
                        </div>
                        <div className="cellphone-bottom-menu__item">
                            <img src={phone_chat} alt=""/>
                            <span>Chat</span>
                        </div>
                    </div>
                </div>
                {/* <div onClick={onClick} id="cellphone-numpad">
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
                        <div style={{backgroundColor: btnAcceptColor}} onClick={call} id="accept-call-button"><i
                            className="fas fa-phone"/></div>

                        <div style={{backgroundColor: btnDeclineColor}} onClick={HungUp as any}
                             id="decline-call-button"><i
                            className="fas fa-phone-slash"/></div>

                        <div ref={refTransferBtn} style={{backgroundColor: '#C7C6C5'}} onClick={onOpenList}
                             id="decline-call-button">
                            <img src={transfer_svg}/>
                        </div>
                    </div>
                </div> */}
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
