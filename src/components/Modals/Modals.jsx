import React from 'react';
import { NewGroupModalContainer } from './NewGroupModal/NewGroupModalContainer';
import { DeleteGroupModalContainer } from './DeleteGroupModal/DeleteGroupModalContainer';
import { NewDriverModalContainer } from './NewDriverModal/NewDriverModalContainer';
import { NewDispatcherModalContainer } from './NewDispatcherModal/NewDispatcherModalContainer';
import { NewSmsModalContainer } from './NewSmsModal/NewSmsModalContainer';
import { EditProfileModalContainer } from './EditProfileModal/EditProfileModalContainer';
import {EditDispatcherModal} from "./EditDispathcerModal/EditDispatcherModal";
import {EditDispatcherModalContainer} from "./EditDispathcerModal/EditDispatcherModalContainer";

const Modals = ({
    driverId, isVisibleNewGroupModal, setIsVisibleNewGroupModal,
    isVisibleDeleteGroupModal, setIsVisibleDeleteGroupModal, isVisibleNewDriverModal,
    setIsVisibleNewDriverModal, isVisibleNewDispatcherModal, setIsVisibleNewDispatcherModal,
    isVisibleNewSmsModal, setIsVisibleSentSmsNotification, setIsVisibleNewSmsModal,
    isVisibleEditProfileModal, setIsVisibleEditProfileModal,isVisibleEditDispatcherModal
}) => (
    <>
        {isVisibleNewGroupModal
            && <NewGroupModalContainer
                setVisible={setIsVisibleNewGroupModal}/>}
        {isVisibleDeleteGroupModal
            && <DeleteGroupModalContainer
                setVisible={setIsVisibleDeleteGroupModal}/>}
        {isVisibleNewDriverModal
            && <NewDriverModalContainer
                setVisible={setIsVisibleNewDriverModal}/>}
        {isVisibleNewDispatcherModal
            && <NewDispatcherModalContainer
                setVisible={setIsVisibleNewDispatcherModal}/>}
        {isVisibleNewSmsModal
            && <NewSmsModalContainer
                setIsVisibleSentSmsNotification={setIsVisibleSentSmsNotification}
                setVisible={setIsVisibleNewSmsModal}/>}
        {isVisibleEditProfileModal
            && <EditProfileModalContainer
                driverId={driverId}
                setVisible={setIsVisibleEditProfileModal}/>}
        {isVisibleEditDispatcherModal
        && <EditDispatcherModalContainer
        />}
    </>
);

export default Modals;
