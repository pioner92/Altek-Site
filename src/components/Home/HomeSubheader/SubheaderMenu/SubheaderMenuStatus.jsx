import React, {useRef} from 'react';
import Menu from './Menu';

const SubheaderMenuStatus = ({setDriverStatusAction, markAsReadAction, selectedId, clearSelectedDrivers, page}) => {
    const dateRef = useRef()
    const setStatus = ({action, date}) => {
        if (selectedId.length > 0) {
            const data = {
                action,
                ids: selectedId,
                page
            }
            if (date) {
                const date = new Date(dateRef?.current?.value)
                const date_now = new Date()
                const date_sec = Math.floor((date - date_now) / 1000);
                if (date_sec > 0) {
                    const date_day = new Date(dateRef?.current?.value).toLocaleDateString();
                    const date_time = new Date(dateRef?.current?.value).toLocaleTimeString().slice(0, -3);
                    data['date_sec'] = date_sec
                    data['date_day'] = date_day
                    data['date_time'] = date_time
                }
            }
            setDriverStatusAction(data)
        } else {
            alert('No selected drivers')
        }
    }

    const onClickWorking = () => {
        setStatus({action: 'working'})
        clearSelectedDrivers()
    }
    const onClickNotWorking = () => {
        setStatus({action: 'not_working', date: true})
        clearSelectedDrivers()
    }
    const onClickFired = () => {
        setStatus({action: 'fired'})
        clearSelectedDrivers()
    }

    const onClickMartAsRead = () =>{
        markAsReadAction(selectedId)
    }

    return (
        <Menu>

            {window.is_admin&&<div className="header col-lg-3">
                <div style={{background: '#0079FE', color: 'white', border: '0px'}}
                     onClick={onClickMartAsRead}
                     className="header-btn header-round-btn" id="mark-as-read-btn">
                    <span>Mark as read</span>
                </div>
            </div>}
            <div className="header col-lg-2">
                <div onClick={onClickWorking} className="header-btn header-round-btn" id="working-btn">
                    <span>Working</span>
                </div>
            </div>
            <div className="header col-5 d-flex justify-content-center">
                <div className="header-btn-block">
                    <div onClick={onClickNotWorking} className="header-btn header-round-btn" id="not_working-btn">
                        <span>Not working</span>
                    </div>
                    <div className="header-btn header-round-btn">
                        <input ref={dateRef} id="input-not_working-date" style={{height: '20px'}} type="date"/>
                    </div>
                </div>
            </div>
            <div className="header col-2">
                <div onClick={onClickFired} className="header-btn header-round-btn" id="fired-btn">
                    <span>Fired</span>
                </div>
            </div>
        </Menu>
    );
};

export default SubheaderMenuStatus;
