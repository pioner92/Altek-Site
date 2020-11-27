import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import {Context} from './components/Context/Context';
import {HomeContainer} from './components/Home/HomeContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {SettingsSubheader} from './components/Settings/SettingsSubheader';
import {HomeSubheaderContainer} from './components/Home/HomeSubheader/HomeSubheaderContainer';
import {MessengerContainer} from './components/Messenger/MessengerContainer';
import {MessengerSubheaderContainer} from './components/Messenger/MessengerSubheader/MessengerSubheaderContainer';
import {CallHistoryContainer} from './components/CallHistory/CallHistoryContainer';
import Modals from './components/Modals/Modals';
import {HeaderOtherContainer} from './components/Header/HeaderOtherContainer';
import RightBlockContainer from './components/RightBlock/RightBlockContainer';
import {setClasses} from "./utils/setClasses/setClasses";

function App({
                 checkSmsAction, isNewMessage, newMessageAction, addCallHistoryLinkAction, queueStatus, writeToStoreIsNewCallNotificationAction,
                 updateCallNotificationAction, getCallNotificationAction
             }) {
    //------
    const [isVisibleNewGroupModal, setIsVisibleNewGroupModal] = useState(false);
    const [isVisibleDeleteGroupModal, setIsVisibleDeleteGroupModal] = useState(false);
    const [isVisibleNewDriverModal, setIsVisibleNewDriverModal] = useState(false);
    const [isVisibleNewDispatcherModal, setIsVisibleNewDispatcherModal] = useState(false);
    const [isVisibleNewSmsModal, setIsVisibleNewSmsModal] = useState(false);
    const [isVisibleEditProfileModal, setIsVisibleEditProfileModal] = useState(false);
    const [isVisibleEditDispatcherModal, setIsVisibleEditDispatcherModal] = useState(false);

    const [isVisibleSentSmsNotification, setIsVisibleSentSmsNotification] = useState(false);

    const [driverId, setDriverId] = useState('');

    const cellPhoneRef = useRef();

    const setCellPhoneInput = (data) => {
        cellPhoneRef.current.setInput(data);
    };

    const Call = (number) => {
        cellPhoneRef.current.Call(number);
    };

    const setStatusData = (data) => {
        cellPhoneRef.current.setStatusData(data);
    };

    const setId = (id) => {
        cellPhoneRef.current.setId(id);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            checkSmsAction();
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        setClasses()
    }, [])

    return (
        <Context.Provider value={{
            setIsVisibleNewGroupModal,
            setIsVisibleDeleteGroupModal,
            setIsVisibleNewDispatcherModal,
            setIsVisibleNewDriverModal,
            isVisibleSentSmsNotification,
            setIsVisibleSentSmsNotification,
            isVisibleEditDispatcherModal,
            setIsVisibleEditDispatcherModal,
            isVisibleNewSmsModal,
            setIsVisibleNewSmsModal,
            isNewMessage,
            newMessageAction,
            setIsVisibleEditProfileModal,
            setStatusData,
            Call,
            setCellPhoneInput,
            setId,
            setDriverId
        }}>
            <div className="App">
                <div className="page">
                    <div  className="container">
                        <div className="page-wrapper">
                            {/* //-- Modals */}
                            <Modals
                                driverId={driverId}
                                isVisibleNewGroupModal={isVisibleNewGroupModal}
                                setIsVisibleNewGroupModal={setIsVisibleNewGroupModal}
                                isVisibleDeleteGroupModal={isVisibleDeleteGroupModal}
                                setIsVisibleDeleteGroupModal={setIsVisibleDeleteGroupModal}
                                isVisibleNewDriverModal={isVisibleNewDriverModal}
                                setIsVisibleNewDriverModal={setIsVisibleNewDriverModal}
                                isVisibleNewDispatcherModal={isVisibleNewDispatcherModal}
                                setIsVisibleNewDispatcherModal={setIsVisibleNewDispatcherModal}
                                isVisibleNewSmsModal={isVisibleNewSmsModal}
                                setIsVisibleSentSmsNotification={setIsVisibleSentSmsNotification}
                                setIsVisibleNewSmsModal={setIsVisibleNewSmsModal}
                                isVisibleEditProfileModal={isVisibleEditProfileModal}
                                setIsVisibleEditProfileModal={setIsVisibleEditProfileModal}
                                isVisibleEditDispatcherModal={isVisibleEditDispatcherModal}
                                setIsVisibleEditDispatcherModal={setIsVisibleEditDispatcherModal}
                            />
                            {/* //-- Header */}
                            <Route path={['/', '/page/:n?']} exact render={() => <HeaderContainer
                                setIsVisibleNewSmsModal={setIsVisibleNewSmsModal}/>}/>
                            <Route path={['/settings/:s', '/messenger/:id', '/callhistory/:id?']}
                                   component={HeaderOtherContainer}/>
                            {/* //-- Subheader */}
                            <Route path='/messenger/:id/:action?' exact component={MessengerSubheaderContainer}/>
                            <Route path={['/settings/:name?/:page?/:n?']} exact render={() => <SettingsSubheader/>}/>
                            <Route path={['/', '/page/:n?']} exact
                                   render={(props) => <HomeSubheaderContainer {...props}/>}/>
                            {/* //-- Content */}
                            <div className='row main'>
                                <Route path={['/', '/page/:n?']} exact render={(props) => <HomeContainer
                                    {...props}
                                />}
                                />
                                <Route path='/settings' render={() => <Settings/>}/>
                                <Route path='/messenger/:id?/:action?' exact
                                       render={(props) => <MessengerContainer
                                           setDriverId={setDriverId} {...props}/>}/>
                                <Route path='/callhistory/:id' exact
                                       component={CallHistoryContainer}/>
                                <RightBlockContainer
                                    getCallNotificationAction={getCallNotificationAction}
                                    updateCallNotificationAction={updateCallNotificationAction}
                                    writeToStoreIsNewCallNotificationAction={writeToStoreIsNewCallNotificationAction}
                                    queueStatus={queueStatus}
                                    ref={cellPhoneRef}
                                    addCallHistoryLinkAction={addCallHistoryLinkAction}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Context.Provider>
    );
}

export default React.memo(App);
