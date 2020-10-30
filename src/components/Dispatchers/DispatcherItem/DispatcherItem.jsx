import React, {useContext, useEffect, useRef, useState} from 'react';
import iconTrash from '../../../static/icons/trash.svg';
import iconEdit from '../../../static/icons/edit-pen.svg'
import {writeToStoreSelectedDispatcher} from "../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";
import {Context} from "../../Context/Context";
import {IsAdmin} from "../../Validate/isAdmin";

const DispatcherItem = ({
                            deleteDispatcherAction, isChecked, onChangeCheckBox, writeToStoreSelectedDispatcher, data: {
        login, name, email, phone, id, group
    },
                        }) => {

    const {setIsVisibleEditDispatcherModal} = useContext(Context)

    const deleteDispatcher = () => {
        console.log(id)
        deleteDispatcherAction(id);
    };

    const checkBoxRef = useRef();

    const onChange = (e) => {
        onChangeCheckBox(phone, checkBoxRef.current.checked);
    };

    const updateDispatcher = () => {
        console.log(id)
        setIsVisibleEditDispatcherModal(true)
        writeToStoreSelectedDispatcher({login, name, email, phone, id, group})
    }

    return (
        <div className="col-12 row mb-4">
            <div className="col-12 col-lg-3 d-flex align-items-center">
                <IsAdmin flag={true}>
                    <input className='mr-2' ref={checkBoxRef} checked={isChecked} onChange={onChange} id={id}
                           type="checkbox"/>
                    <div className="b-input "/>
                </IsAdmin>
                {login}
            </div>
            <div className="col-12 col-lg-2 d-flex justify-content-start" style={{paddingLeft: '19px'}}>
                {name}
            </div>
            <div className="col-12 col-lg-3 d-flex justify-content-start" style={{paddingLeft: '21px'}}>
                {email}
            </div>
            <div className="col-12 col-lg-3 d-flex justify-content-start" style={{paddingLeft: '25px'}}>
                {phone}
            </div>
            <div className="col-12 col-lg-1 d-flex justify-content-start">
                <div className="trash-icon" style={{marginLeft: '-15px'}} data-id={id}>
                    <IsAdmin flag={true}>
                        <img onClick={updateDispatcher} style={{marginRight: '9px'}} src={iconEdit} alt=''/>
                        <img onClick={deleteDispatcher} src={iconTrash} alt=''/>
                    </IsAdmin>
                </div>
            </div>
        </div>
    );
};

export default DispatcherItem;
