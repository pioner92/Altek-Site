import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import searchIcon from '../../static/icons/search.svg';
import notificationSvg from '../../static/icons/notifications.svg'
import notificationSvgActive from '../../static/icons/notifications_active.svg'
import {CallNotificationContainer} from "../Modals/CallNotification/CallNotificationContainer";
import Data from '../../data.json'
import {getCompanyName} from "../../utils/getCompanyName";
import {connectorType} from "./HeaderContainer";


export type ownerProps = {
    setIsVisibleNewSmsModal: any
}

declare const window: {
    number: string
}

type companyType = {
    company: {
        "name": string
        "fax": string
        "Account_Sid": string
        "Auth_Token": string
        "APP_SID": string
        voice_assistant_number: string
        hidden_number: string
        dispatcher_numbers: Array<string>
        numbers_available: Array<string>
    }
}

export const Header: React.FC<connectorType> = React.memo(
    ({
         driverFilterAction, selectDriversAllAction, inputFilterValue,
         setIsVisibleNewSmsModal, selectedId, getDriversAction, isSelectedAll,
         isNewCallNotification,
         writeToStoreIsNewCallNotificationAction,
         updateCallNotificationAction
     }) => {

        const [inputValue, setInputValue] = useState('');
        const [isVisible, setIsVisible] = useState(false)
        const [companyData, setCompanyData] = useState<companyType>()

        const inputSelectAll = useRef<HTMLInputElement>(null);


        const onSelectAll = () => {
            if (inputSelectAll.current) {
                selectDriversAllAction(inputSelectAll.current.checked);
            }
        };

        const onChangeFilterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
            if (!e.target.value) {
                getDriversAction({});
            }
            driverFilterAction(e.target.value);
        };

        const onKeyDown = (e: React.KeyboardEvent) => {
            if (e.keyCode === 13) {
                getDriversAction({inputValue});
            }
        };

        const openModalSendSMS = () => {
            if (selectedId.length > 0) {
                setIsVisibleNewSmsModal(true);
            } else {
                alert('No selected drivers');
            }
        };

        const openCallNotificationModal = () => {
            setIsVisible(true)
            writeToStoreIsNewCallNotificationAction(false)
            updateCallNotificationAction({})
        }
        const closeCallNotificationModal = () => {
            setIsVisible(false)
        }

        useEffect(() => () => {

            setInputValue('');
            driverFilterAction('');
        }, []);

        useEffect(() => {
            const company = getCompanyName()
            fetch(`${Data.url}/get_company_data/${company}`)
                .then((res) => res.json())
                .then((data: companyType) => setCompanyData(data))
        }, [])


        return (
            <div className="page-header row container-wrap d-flex row">
                <div className="row col-12 col-md-7 d-flex align-items-center">
                    <div className="checkbox-wrapper col-lg-2 col-md-3 col-12 checkbox_all"
                         style={{marginRight: '10px'}}>
                        <label className="b-contain">
                            <span style={{fontWeight: 500, whiteSpace: 'nowrap'}}>Select all</span>
                            <input checked={isSelectedAll} ref={inputSelectAll} onChange={onSelectAll} type="checkbox"/>
                            <div className="b-input"/>
                        </label>
                    </div>
                    <div className="send-sms-button-wrapper col-lg-3 col-md-3 col-12 d-flex justify-content-center">
                        <div className="col-12" onClick={openModalSendSMS} id="header-send-sms-button">Send sms</div>
                    </div>
                    <div className="search-wrapper col-md-3 col-12 d-flex justify-content-center">
                        <div className="search col-12">
                            <div id="header-search-button">
                                <img src={searchIcon} alt="Search"/>
                            </div>
                            <input
                                onKeyDown={onKeyDown}
                                onChange={onChangeFilterInput}
                                value={inputFilterValue}
                                type="text"
                                id="header-search-input"
                                placeholder="Search"/>
                        </div>
                    </div>
                </div>
                <div className="settings-button-wrapper col-md-5 col-12">
                    <div className="col-12 d-flex justify-content-end align-items-center"
                         style={{padding: 0, alignItems: 'center'}}>
                        <div className="tel-info">
                            <p>{`tel: ${companyData?.company?.voice_assistant_number}`}</p>
                            <p>{`fax: ${companyData?.company?.fax}`}</p>
                            <p>{`ext: ${window.number}`}</p>
                        </div>
                        <Link to='/settings/main' id="header-settings-button">
                            Settings
                        </Link>
                        <img onClick={openCallNotificationModal}
                             style={{cursor: 'pointer', width: '25px', height: '25px'}}
                             className='col-2'
                             src={isNewCallNotification ? notificationSvgActive : notificationSvg}/>
                    </div>
                </div>
                <CallNotificationContainer
                    isVisible={isVisible}
                    closeModal={closeCallNotificationModal}/>
            </div>
        );
    });
