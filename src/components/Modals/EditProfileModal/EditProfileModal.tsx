import React, {useEffect, useRef, useState} from 'react';
// @ts-ignore
import {withRouter} from 'react-router-dom';
import {closeModal} from '../../../utils/closeModals';
import {connectorType} from "./EditProfileModalContainer";

export type ownProps = {
    setVisible: Function
    driverId: string
}

const EditProfileModal: React.FC<connectorType> = ({
                                                       selectedDriver,messagesSubheader,
                                                       setVisible, updateDriverAction, driverId, deleteDriverAction,
                                                       getDispatchersAction, getResponsibleAction, dispatchers, setResponsibleAction,
                                                       responsibleData, ...props
                                                   }) => {
    const [phone, setPhone] = useState<string>(selectedDriver.number);
    const [name, setName]   = useState<string>(selectedDriver.name);
    const [veh_id, setVehId] =  useState<string>(selectedDriver.veh_id);
    const [dispatcherId, setDispatcherId] = useState<string>('')

    const selectRef = useRef<HTMLSelectElement>(null);

    console.log(props);

    const onClickSave = () => {
        if (driverId) {
            setVisible(false);
            if('id' in messagesSubheader){
                updateDriverAction({id: +messagesSubheader.id, name, phone, veh_id});
            }
            else {
            updateDriverAction({id: selectedDriver.id, name, phone, veh_id});
            }
        } else {
            alert('Error with data !');
        }
    };

    const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const onChangeVehId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVehId(e.target.value);
    };
    const onCloseModal = (e: React.MouseEvent<HTMLElement>) => {
        closeModal(e, setVisible);
        onSetResponsible()
    };

    const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (selectRef.current) {
            setDispatcherId(selectRef.current.options[selectRef.current.options.selectedIndex].id)
        }
    };

    const onSetResponsible = () => {
        setResponsibleAction({driver_id: driverId, dispatcher_id: dispatcherId});
    }

    useEffect(() => {
        getDispatchersAction();
        getResponsibleAction(driverId);
    }, []);

    useEffect(() => {
        if (responsibleData.id && selectRef.current) {
            console.log(responsibleData)
            setDispatcherId(responsibleData.id.toString())
        }
        console.log('SELECT после if')
    }, [responsibleData])

    return (
        <div id="new-driver-modal" className="mymodal">
            <div onClick={onCloseModal} className="mymodal-bg-blur">
                <div className="mymodal-wrapper">
                    <div className="mymodal-header">
                        <span>Edit driver's profile</span>
                    </div>
                    <div className="mymodal-content">
                        <div className="modal-form">
                            <label className="modal-label" htmlFor="Phone">Phone: </label>
                            <input onChange={onChangePhone} value={phone} className="modal-input" type="text"
                                   id="phone"/>
                        </div>
                        <div className="modal-form">
                            <label className="modal-label" htmlFor="name">Name: </label>
                            <input onChange={onChangeName} value={name} className="modal-input" type="text" id="name"/>
                        </div>
                        <div className="modal-form">
                            <label className="modal-label" htmlFor="role">Vehicle id: </label>
                            <input onChange={onChangeVehId} value={veh_id} className="modal-input" type="role"
                                   id="role"/>
                        </div>
                        <div className="modal-form">
                            <label className="modal-label" htmlFor="role">Responsible: </label>
                            <select onChange={onChangeSelect} ref={selectRef} style={{width: '60%'}}>
                                {dispatchers.map((el) => (
                                    <option selected={+dispatcherId === el.id} key={el.id}
                                            id={el.id.toString()}>{el.email}</option>
                                ))}
                            </select>
                        </div>
                        <div className="modal-buttons ">
                            <button onClick={onClickSave} className="modal-btn">Save</button>
                            {/*<button onClick={deleteDriver} className="modal-btn">Delete</button>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// @ts-ignore
export default withRouter(EditProfileModal);
