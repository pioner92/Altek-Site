import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import iconHome from '../../static/icons/home.svg';
import { SearchConnectContainer } from './SearchContainer';

const HeaderOther = ({
    getDriversAction, driverFilterAction, inputFilterValue, getCallHistoryAction, ...props
}) => {
    const [inputValue, setInputValue] = useState('');

    const onChangeFilterInput = (e, fn) => {
        setInputValue(e.target.value);
        if (!e.target.value) {
            fn({});
            // getDriversAction({});
        }
        driverFilterAction(e.target.value);
    };

    const onChangeFilterInputDrivers = (e) => {
        onChangeFilterInput(e, getDriversAction);
    };
    const onChangeFilterInputCallHistory = (e) => {
        onChangeFilterInput(e, getCallHistoryAction);
    };

    const onKeyDownSearchDrivers = (e) => {
        if (e.keyCode === 13) {
            console.log('Drivers');
            getDriversAction({ inputValue });
        }
    };
    const onKeyDownSearchCallHistory = (e) => {
        if (e.keyCode === 13) {
            console.log('History');
            getCallHistoryAction({ author_id: inputValue });
        }
    };

    const SearchComponent = (onKeyDown, onChange) => SearchContainer({
        onChange, inputValue: inputFilterValue, onKeyDown,
    });

    return (
        <div className="page-header row container-wrap">
            <div className="col-9 row">
                <div className="col-lg-2 row col-md-3 col-12">
                    <Link to='/'>
                        <div className="header-btn home-btn">
                            <img className="mr-2" src={iconHome} alt='HomeIcon'/>
                            <span>Home</span>
                        </div>
                    </Link>
                </div>
                {/* <div className="search-wrapper col-md-3 col-12"> */}

                {/* </div> */}
                {props.match.params.s === 'drivers'
                    && SearchComponent(onKeyDownSearchDrivers, onChangeFilterInputDrivers)
                }
                {props.match.params.s === 'main'
                    && SearchComponent(onKeyDownSearchCallHistory, onChangeFilterInputCallHistory)
                }
            </div>
            <div className="settings-button-wrapper col-md-3 col-12 d-flex row justify-content-center">
                <Link to='/settings/main'>
                    <div id="header-settings-button">
                        Settings
                    </div>
                </Link>
            </div>
        </div>
    );
};

const SearchContainer = ({ onKeyDown, onChange, inputValue }) => (
    <SearchConnectContainer
        onKeyDown={onKeyDown}
        onChangeFilterInput={onChange}
        inputFilterValue={inputValue}/>
);

export default React.memo(HeaderOther);
