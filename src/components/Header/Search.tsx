import React, { useEffect } from 'react';
import searchIcon from '../../static/icons/search.svg';
import {connectorType} from "./SearchContainer";

export type ownerType = {
    onKeyDown:(e:React.KeyboardEvent)=>void
    onChangeFilterInput:(e:React.ChangeEvent<HTMLInputElement>)=>void
    inputFilterValue:string
}

const Search:React.FC<connectorType> = ({
    onKeyDown, onChange, inputValue, driverFilterAction,
}) => {
    useEffect(() => () => {
        driverFilterAction('');
    }, []);
    return (
        <div className="search-wrapper col-md-3 col-12 d-flex justify-content-center">
            <div className="search col-12">
                <div id="header-search-button">
                    <img src={searchIcon} alt="Search"/>
                </div>
                <input
                    onKeyDown={onKeyDown}
                    onChange={onChange}
                    value={inputValue}
                    type="text"
                    id="header-search-input"
                    placeholder="Search"/>
            </div>
        </div>
    );
};

export default Search;
