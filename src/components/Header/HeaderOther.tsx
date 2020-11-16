import React, {useState} from 'react';
import {Link, match} from 'react-router-dom';
import iconHome from '../../static/icons/home.svg';
import {SearchConnectContainer} from './SearchContainer';
import {connectorType} from "./HeaderOtherContainer";


export type ownerType = {
    match: match<{ s: string }>
}

type onChangeInputType = (e: React.ChangeEvent<HTMLInputElement>) => void;
type onKeyPressType = (e: React.KeyboardEvent) => void


export const HeaderOther: React.FC<connectorType> = React.memo(
    ({
         getDriversAction, driverFilterAction, inputFilterValue, getCallHistoryAction, match
     }) => {
        const [inputValue, setInputValue] = useState('');

        const onChangeFilterInput = (e: React.ChangeEvent<HTMLInputElement>, fn: Function) => {
            setInputValue(e.target.value);
            if (!e.target.value) {
                fn({});
            }
            driverFilterAction(e.target.value);
        };

        const onChangeFilterInputDrivers = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChangeFilterInput(e, getDriversAction);
        };
        const onChangeFilterInputCallHistory = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChangeFilterInput(e, getCallHistoryAction);
        };

        const onKeyDownSearchDrivers = (e: React.KeyboardEvent) => {
            if (e.keyCode === 13) {
                getDriversAction({inputValue});
            }
        };
        const onKeyDownSearchCallHistory = (e: React.KeyboardEvent) => {
            if (e.keyCode === 13) {
                getCallHistoryAction({author_id: inputValue});
            }
        };

        const SearchComponent = (onKeyDown: typeof onKeyDownSearchDrivers, onChange: typeof onChangeFilterInputDrivers) => SearchContainer({
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
                    {match.params.s === 'drivers'
                        && SearchComponent(onKeyDownSearchDrivers, onChangeFilterInputDrivers)
                    }
                    {match.params.s === 'main'
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
    });

export type searchContainerType = {
    onKeyDown: onKeyPressType
    onChange: onChangeInputType
    inputValue: string
}

const SearchContainer: React.FC<searchContainerType> = ({onKeyDown, onChange, inputValue}) => (
    <SearchConnectContainer
        onKeyDown={onKeyDown}
        onChange={onChange}
        inputValue={inputValue}/>
);

