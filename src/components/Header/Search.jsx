import React, { useEffect } from 'react';
import searchIcon from '../../static/icons/search.svg';

const Search = ({
    onKeyDown, onChangeFilterInput, inputFilterValue, driverFilterAction,
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
                    onChange={onChangeFilterInput}
                    value={inputFilterValue}
                    type="text"
                    id="header-search-input"
                    placeholder="Search"/>
            </div>
        </div>
    );
};

export default Search;
