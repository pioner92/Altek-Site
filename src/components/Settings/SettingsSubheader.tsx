import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import iconBack from '../../static/icons/back.svg';
import logoutIcon from '../../static/icons/logout.svg';
import {logOut} from '../../utils/logout';


declare const window: {
    is_admin: boolean
    history: {
        back: Function
    }
}

export const SettingsSubheader = () => {
    const onClickBack = () => {
        window.history.back();
    };

    return (
        <div className="list-headers-wrapper hide-on-medium-and-down">
            <div className="col-12 row">
                <div className="col-9 row align-items-center justify-content-between container-wrap-left">
                    <div className="row col-8 align-items-center">
                        <div className="header col-2 row">
                            <div onClick={onClickBack} className='back-btn' style={{marginLeft: '4px'}}>
                                <img
                                    src={iconBack}/> Back
                            </div>
                        </div>
                        {window.is_admin
                            ? <>
                                <div className="header col-3 row">
                                    <div id="add-group-btn">
                                        <Link className="header-btn header-round-btn"
                                              to='/settings/groups'><span>Add Groups</span></Link>
                                    </div>
                                </div>
                                <div className="header col-3 row">
                                    <div id="new-drivers-btn">
                                        <Link className="header-btn header-round-btn" to='/settings/drivers'><span>Add Drivers</span></Link>
                                    </div>
                                </div>
                                <div className="header col-4 row">
                                    <div id="new-dispatcher-btn">
                                        <Link className="header-btn header-round-btn" to='/settings/dispatchers'><span>Add Dispatchers</span></Link>
                                    </div>
                                </div>

                            </>
                            : <div className="header col-3 row">
                                <div id="new-drivers-btn">
                                    <Link className="header-btn header-round-btn" to='/settings/drivers'><span>Add Drivers</span></Link>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="row">
                        <div className="header-btn header-btn-blue">
                            <span>Tutorial</span>
                        </div>
                    </div>
                </div>
                <div className="col-3 row justify-content-center">
                    <Link to='/settings/main' className="header-btn header-btn-blue"><span>Call History</span></Link>
                    <div className="logout-btn">
                        <LogOut/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Image = styled.img`
    cursor:pointer;
`;

const LogOut = () => (
    <Image onClick={logOut} src={logoutIcon} alt=""/>
);
