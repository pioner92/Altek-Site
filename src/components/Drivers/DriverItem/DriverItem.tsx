import React, {useContext} from 'react';
import iconTrash from '../../../static/icons/trash.svg';
import iconEdit from '../../../static/icons/edit-pen.svg';
import {Context} from '../../Context/Context';
import {IsAdmin} from '../../Validate/isAdmin';
import {connectorType} from './DriverItemContainer';
import {responseDriverDataType} from '../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions';

export type ownProps = {
    data: responseDriverDataType
};

export var DriverItem: React.FC<connectorType> = function (
    {
        writeToStoreSelectedDriver, deleteDriverAction,
        data: {id, name, email, number, veh_id, ...data}
    }
) {
    const {setIsVisibleEditProfileModal} = useContext(Context);

    const deleteDriver = () => {
        deleteDriverAction(id);
    };

    const updateDriver = () => {
        setIsVisibleEditProfileModal(true);
        writeToStoreSelectedDriver({id, name, email, number, veh_id, ...data});
    };

    return (
        <div className="col-12 row mb-4 list-items-wrapper">
            <div className="col-2">
                {veh_id}
            </div>
            <div className="col-12 col-lg-3 d-flex justify-content-start" style={{paddingLeft: '18px'}}>
                {name}
            </div>
            <div className="col-12 col-lg-3 d-flex justify-content-start" style={{paddingLeft: '22px'}}>
                {email}
            </div>
            <IsAdmin flag={true}>
                <div className="col-12 col-lg-2 d-flex justify-content-start" style={{paddingLeft: '26px'}}>
                    {number}
                </div>
                <div className="col-1 d-flex justify-content-start" style={{display: 'flex', width: '50px'}}>
                    <div className="trash-icon" data-id={id} style={{marginLeft: '-15px'}}>
                        <img alt="" onClick={updateDriver} src={iconEdit} style={{marginRight: '9px'}}/>
                        <img onClick={deleteDriver} src={iconTrash}/>
                    </div>
                </div>
            </IsAdmin>
        </div>
    );
};
