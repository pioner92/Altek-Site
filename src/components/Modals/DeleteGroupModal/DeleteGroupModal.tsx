import React from 'react';
import { closeModal } from '../../../utils/closeModals';
import {
    deleteGroupActionType,
} from "../../../Redux/Actions/DeleteDateActions/DeleteDataActions";

type deleteGroupModalPropsType = {
    setVisible:(state:boolean)=>void,
    deleteGroupAction:deleteGroupActionType
    deleteItemName:string
}

const DeleteGroupModal:React.FC<deleteGroupModalPropsType> = ({ setVisible, deleteGroupAction, deleteItemName }) => {

    const deleteGroup = () => {
        deleteGroupAction(deleteItemName);
        setVisible(false);
    };

    const onCloseModal = (e:React.MouseEvent<HTMLElement>) => {
        closeModal(e, setVisible);
    };

    return (
        <div id="group-delete-modal" className="mymodal">
            <div onClick={onCloseModal} className="mymodal-bg-blur"/>
            <div className="mymodal-wrapper">
                <div className="mymodal-header">
                    <span>Are you sure?</span>
                </div>
                <div className="mymodal-content">
                    <div className="d-flex justify-content-center">
                        <p>Do you wish to delete this group?</p>
                    </div>
                    <div className="modal-buttons">
                        <button onClick={deleteGroup} className="modal-btn mr-3 yes-btn">Yes</button>
                        <button className="modal-btn no-btn">No</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(DeleteGroupModal);
