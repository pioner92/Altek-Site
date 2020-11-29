import React, { useState } from 'react';
import { closeModal } from '../../../utils/closeModals';
import {addNewDriverActionType} from "../../../Redux/Actions/AddDataActions/AddDataActions";

type newDriverModalPropsType = {
    setVisible:(state:boolean)=>void
    addNewDriverAction:addNewDriverActionType
}

const NewDriverModal:React.FC<newDriverModalPropsType> = ({ setVisible, addNewDriverAction }) => {
    const [name, setName] = useState('');
    const [veh_id, setVeh_id] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const onChangeName = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const onChangeId = (e:React.ChangeEvent<HTMLInputElement>) => {
        setVeh_id(e.target.value);
    };
    const onChangePhone = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };
    const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const onCloseModal = (e:React.MouseEvent<HTMLElement>) => {
        closeModal(e, setVisible);
    };

    const addNewDriver = () => {
        if (name && veh_id && phone && email) {
            const driverData = {
                name, veh_id, phone, email,
            };
            addNewDriverAction(driverData);
        } else {
            alert('All fields are required');
        }
        setVisible(false);
    };

    return (
        <div id="new-driver-modal" className="mymodal">
            <div onClick={onCloseModal} className="mymodal-bg-blur">
                <div className="mymodal-wrapper">
                    <div className="mymodal-header">
                        <span>New driver</span>
                    </div>

                    <div className="mymodal-content">
                        <div className="modal-form">
                            <label className="modal-label" htmlFor="id">ID: </label>
                            <input onChange={onChangeId} value={veh_id} className="modal-input" type="text" id="id"/>
                        </div>
                        <div className="modal-form">
                            <label className="modal-label" htmlFor="name">Name: </label>
                            <input onChange={onChangeName} value={name} className="modal-input" type="text" id="name"/>
                        </div>
                        <div className="modal-form">
                            <label className="modal-label" htmlFor="email">Email: </label>
                            <input onChange={onChangeEmail} value={email} className="modal-input" type="email" id="email"/>
                        </div>
                        <div className="modal-form">
                            <label className="modal-label" htmlFor="phone">Phone: </label>
                            <input onChange={onChangePhone} value={phone} className="modal-input" type="phone" id="phone" defaultValue="+"/>
                        </div>
                        <div onClick={addNewDriver} className="modal-buttons">
                            <button className="modal-btn">Save</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default React.memo(NewDriverModal);
