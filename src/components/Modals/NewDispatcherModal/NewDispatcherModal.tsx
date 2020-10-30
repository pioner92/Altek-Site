import React, {useState} from 'react';
import {closeModal} from '../../../utils/closeModals';
import {addNewDispatcherActionType} from "../../../Redux/Actions/AddDataActions/AddDataActions";

type newDispatcherModalPropsType = {
    setVisible: Function
    addNewDispatcherAction: addNewDispatcherActionType
}

const NewDispatcherModal: React.FC<newDispatcherModalPropsType> = ({setVisible, addNewDispatcherAction}) => {
    const [login, setLogin] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [ext, setExt] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const onChangeExt = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExt(e.target.value);
    };
    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onCloseModal = (e: React.MouseEvent<HTMLElement>) => {
        closeModal(e, setVisible);
    };

    const addNewDispatcher = () => {
        if (login && name && ext && password && email) {
            const dispatcherData = {
                login, name, ext, password, email,
            };
            console.log(dispatcherData);
            addNewDispatcherAction(dispatcherData);
        } else {
            alert('All fields are required');
        }
        setVisible(false);
    };

    return (
        <div id="new-dispatcher-modal" className="mymodal">
            <div onClick={onCloseModal} className="mymodal-bg-blur"/>
            <div className="mymodal-wrapper">
                <div className="mymodal-header">
                    <span>New dispatcher</span>
                </div>
                <div className="mymodal-content">
                    <div className="modal-form">
                        <label className="modal-label" htmlFor="login">Login: </label>
                        <input onChange={onChangeLogin} value={login} className="modal-input" type="text" id="login"/>
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
                        <label className="modal-label" htmlFor="ext">Ext: </label>
                        <input onChange={onChangeExt} value={ext} className="modal-input" type="phone" id="ext"
                               defaultValue='+'/>
                    </div>
                    <div className="modal-form">
                        <label className="modal-label" htmlFor="password">Password: </label>
                        <input onChange={onChangePassword} value={password} className="modal-input" type="password"
                               id="password"/>
                    </div>
                    <div onClick={addNewDispatcher} className="modal-buttons">
                        <button className="modal-btn">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(NewDispatcherModal);
