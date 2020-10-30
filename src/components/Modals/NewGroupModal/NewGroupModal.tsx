import React, { useState } from 'react';
import { closeModal } from '../../../utils/closeModals';
import {addNewGroupActionType} from "../../../Redux/Actions/AddDataActions/AddDataActions";

type NewGroupModalPropsType = {
    setVisible:Function
    addNewGroupAction:addNewGroupActionType
}

const NewGroupModal:React.FC<NewGroupModalPropsType> = ({ setVisible, addNewGroupAction }) => {
    const [groupName, setGroupName] = useState('');

    const onChangeGroupName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setGroupName(e.target.value);
    };

    const addNewGroup = () => {
        addNewGroupAction(groupName);
        setVisible(false);
    };

    const onCloseModal = (e:React.MouseEvent<HTMLElement>) => {
        closeModal(e, setVisible);
    };

    return (
        <div id="new-group-modal" className="mymodal">
            <div onClick={onCloseModal} className="mymodal-bg-blur"/>
            <div className="mymodal-wrapper">
                <div className="mymodal-header">
                    <span>Select a group name?</span>
                </div>
                <div className="mymodal-content">
                    <div className="modal-form justify-content-center">
                        <input onChange={onChangeGroupName} value={groupName} className="modal-input" type="text" id="group_name"/>
                    </div>
                    <div className="modal-buttons">
                        <button onClick={addNewGroup} className="modal-btn">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(NewGroupModal);
