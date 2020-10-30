import React, { useContext } from 'react';
import Menu from './Menu';
import { Context } from '../../../Context/Context';

const SubheaderMenuFilter = ({ getDriversAction, writeToStoreFilterStatusDriverAction }) => {
    const { setIsVisibleNewSmsModal } = useContext(Context);

    const onClickWorkingFilter = () => {
        writeToStoreFilterStatusDriverAction('is_working');
        getDriversAction({ filterStatusTitle: 'is_working' });
    };

    const onClickNotWorkingFilter = () => {
        writeToStoreFilterStatusDriverAction('not_working');
        getDriversAction({ filterStatusTitle: 'not_working' });
    };

    const onClickFiredFilter = () => {
        writeToStoreFilterStatusDriverAction('fired');
        getDriversAction({ filterStatusTitle: 'fired' });
    };

    const onSendToUnresponded = () => {
        setIsVisibleNewSmsModal(true);
    };

    return (
        <Menu>
            <div style={{ background: '#0079FE', color: 'white' }} onClick={onSendToUnresponded}
                    className="header-btn header-round-btn mr-2" id="working-btn">
                <span>Send to unresponded</span>
            </div>
            <div onClick={onClickWorkingFilter} className="header-btn header-round-btn mr-2" id="working-btn">
                <span>Working</span>
            </div>
            <div className="header-btn-block mr-2">
                <div onClick={onClickNotWorkingFilter} className="header-btn header-round-btn" id="not working-btn">
                    <span>Not working</span>
                </div>
            </div>
            <div onClick={onClickFiredFilter} className="header-btn header-round-btn" id="fired-btn">
                <span>Fired</span>
            </div>
        </Menu>
    );
};

export default SubheaderMenuFilter;
