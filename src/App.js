import React, {useEffect, useState} from 'react';
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
import {setClasses} from "./utils/setClasses";
import {getNotificationPermission} from "./utils/notification/getNotificationPermission";
import {RightBlockContentContainer} from "./components/RightBlock/RightBlockContentContainer";

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


    useEffect(() => {
        const interval = setInterval(() => {
            checkSmsAction();
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);


    useEffect(() => {
        getNotificationPermission()
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
            setIsVisibleEditProfileModal
        }}>
            <div className="App">
                <div className="page">
                    <div  className="container">
                        <div className="page-wrapper">
                            {/* //-- Modals */}
                            <Modals
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
                                       render={(props) => <MessengerContainer {...props}/>}/>
                                <Route path='/callhistory/:id' exact
                                       component={CallHistoryContainer}/>
                                <RightBlockContentContainer
                                    getCallNotificationAction={getCallNotificationAction}
                                    updateCallNotificationAction={updateCallNotificationAction}
                                    writeToStoreIsNewCallNotificationAction={writeToStoreIsNewCallNotificationAction}
                                    queueStatus={queueStatus}
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
