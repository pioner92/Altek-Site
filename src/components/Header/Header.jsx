import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../static/icons/search.svg';

const Header = (props) => {
    const [inputValue, setInputValue] = useState('');
    const inputSelectAll = useRef();
    const {
        driverFilterAction, selectDriversAllAction, inputFilterValue,
        setIsVisibleNewSmsModal, selectedId, getDriversAction, isSelectedAll,
    } = props;

    const onSelectAll = () => {
        console.log(inputSelectAll.current.checked);
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
            getDriversAction({ inputValue });
        }
    };

    const openModalSendSMS = () => {
        if (selectedId.length > 0) {
            setIsVisibleNewSmsModal(true);
        } else {
            alert('No selected drivers');
        }
    };
    useEffect(() => () => {
        setInputValue('');
        driverFilterAction('');
    }, []);

    return (
        <div className="page-header row container-wrap d-flex row">
            <div className="row col-12 col-md-9 d-flex align-items-center">
                <div className="checkbox-wrapper col-lg-2 col-md-3 col-12 checkbox_all">
                    <label className="b-contain">
                        <span style={{ fontWeight: 500 }}>Select all</span>
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
            <div className="settings-button-wrapper col-md-3 col-12">
                <Link className="col-12" to='/settings/main'>
                    <div id="header-settings-button">
                        Settings
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default React.memo(Header, ((prevProps, nextProps) => prevProps === nextProps));
