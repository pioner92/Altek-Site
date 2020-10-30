import React, {useContext, useEffect, useState} from 'react';
import {closeModal} from "../../../utils/closeModals";
import {Context} from "../../Context/Context";
import {ConnectorType} from "./EditDispatcherModalContainer";

export const EditDispatcherModal: React.FC<ConnectorType> = ({updateDispatcherAction, selectedDispatcher,writeToStoreSelectedDispatcher}) => {
    const {setIsVisibleEditDispatcherModal} = useContext(Context)
    const [login, setLogin] = useState<string>(selectedDispatcher.login)
    const [name, setName] =   useState<string>(selectedDispatcher.name)
    const [email, setEmail] = useState<string>(selectedDispatcher.email)
    const [phone, setPhone] = useState<string>(selectedDispatcher.phone)

    const onCloseModal = (e: React.MouseEvent<HTMLElement>) => {
        const isClosed = closeModal(e, setIsVisibleEditDispatcherModal)
        isClosed && writeToStoreSelectedDispatcher({id:0,name:'',login:'',phone:'',email:'',group:''})
    };

    const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value)
    }

    const onClickSave = () => {
        updateDispatcherAction({id:selectedDispatcher.id,login,name,email,ext:phone})
        setIsVisibleEditDispatcherModal(false)
    }


    return (
        <div id="new-driver-modal" className="mymodal">
            <div onClick={onCloseModal} className="mymodal-bg-blur">
                <div className="mymodal-wrapper">
                    <div className="mymodal-header">
                        <span>Edit dispatcher's profile</span>
                    </div>
                    <div className="mymodal-content">
                        <div className="modal-form">
                            <label className="modal-label" htmlFor="Phone">Login: </label>
                            <input onChange={onChangeLogin} value={login} className="modal-input" type="text"
                                   id="login"/>
                        </div>
                        <div className="modal-form">
                            <label className="modal-label" htmlFor="name">Name: </label>
                            <input onChange={onChangeName} value={name} className="modal-input" type="text" id="name"/>
                        </div>
                        <div className="modal-form">
                            <label className="modal-label" htmlFor="role">Email: </label>
                            <input onChange={onChangeEmail} value={email} className="modal-input" type="role"
                                   id="email"/>
                        </div>
                        <div className="modal-form">
                            <label className="modal-label" htmlFor="role">Phone: </label>
                            <input onChange={onChangePhone} value={phone} className="modal-input" type="role"
                                   id="phone"/>
                        </div>
                        <div className="modal-buttons ">
                            <button onClick={onClickSave} className="modal-btn">Save</button>
                            {/*<button className="modal-btn">Delete</button>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
