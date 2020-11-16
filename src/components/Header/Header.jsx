import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import searchIcon from '../../static/icons/search.svg';
import notificationSvg from '../../static/icons/notifications.svg'
import notificationSvgActive from '../../static/icons/notifications_active.svg'
import {IsAdmin} from "../Validate/isAdmin";
import {CallNotificationContainer} from "../Modals/CallNotification/CallNotificationContainer";
import Data from '../../data.json'
import {getCompanyName} from "../../utils/getCompanyName";


const Header = (props) => {

    const [inputValue, setInputValue] = useState('');
    const [isVisible, setIsVisible] = useState(false)
    const [companyData,setCompanyData] = useState()

    const inputSelectAll = useRef(null);

    const {
        driverFilterAction, selectDriversAllAction, inputFilterValue,
        setIsVisibleNewSmsModal, selectedId, getDriversAction, isSelectedAll, isNewCallNotification, writeToStoreIsNewCallNotificationAction,
        updateCallNotificationAction
    } = props;

    const onSelectAll = () => {
        selectDriversAllAction(inputSelectAll.current.checked);
    };

    const onChangeFilterInput = (e) => {
        setInputValue(e.target.value);
        if (!e.target.value) {
            getDriversAction({});
        }
        driverFilterAction(e.target.value);
    };
    const onKeyDown = (e) => {
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

    useEffect(()=>{
        const company = getCompanyName()
        fetch(`${Data.url}/get_company_data/${company}`)
            .then((res)=>res.json())
            .then((data)=> setCompanyData(data))
    },[])


    return (
        <div className="page-header row container-wrap d-flex row">
            <div className="row col-12 col-md-7 d-flex align-items-center">
                <div className="checkbox-wrapper col-lg-2 col-md-3 col-12 checkbox_all" style={{marginRight: '10px'}}>
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
                <div className="col-12 d-flex justify-content-end align-items-center" style={{alignItem: 'center', padding: 0}}>
                    <div className="tel-info">
                        <p>{`tel: ${companyData?.company?.voice_assistant_number}`}</p>
                        <p>{`fax: ${companyData?.company?.fax}`}</p>
                        <p>{`ext: ${window.number}`}</p>
                    </div>
                    <Link to='/settings/main' id="header-settings-button">
                        Settings
                    </Link>
                        <img onClick={openCallNotificationModal} style={{cursor: 'pointer', width: '25px', height: '25px'}} className='col-2'
                             src={isNewCallNotification ? notificationSvgActive : notificationSvg}/>
                </div>
            </div>
            <CallNotificationContainer
                isVisible={isVisible}
                closeModal={closeCallNotificationModal}/>
        </div>
    );
};

export default React.memo(Header, ((prevProps, nextProps) => prevProps === nextProps));
