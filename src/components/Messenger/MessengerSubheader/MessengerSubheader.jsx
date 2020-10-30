import React, { useContext, useEffect } from 'react';
import icon_back from '../../../static/icons/back.svg'
import {Link} from "react-router-dom";
import {Context} from "../../Context/Context";
import { writeToStoreSelectedDriver } from "../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";


const MessengerSubheader = ({subheader,selectedDriver,writeToStoreSelectedDriver, getMessageAction,deleteItemNameAction, match:{params:{id,action}}}) => {
    const {setIsVisibleEditProfileModal} = useContext(Context)


    const openEditProfileModal = ()=>{
        setIsVisibleEditProfileModal(true)
        deleteItemNameAction(id)
    }

    const onClickBack = () => {
        window.history.back()
    }

    const onChangeDate = (e)=>{
        // getMessage({action,Fetch,getMessageAction,id,date:e.target.value})
        getMessageAction({action,id,date:e.target.value})
    }


    useEffect(()=>{
        writeToStoreSelectedDriver({
            id:subheader.id, name:subheader.name, number:subheader.phone, veh_id:subheader.veh_id
        });
    },[subheader])

    return (
        <div className="list-headers-wrapper messenger-subhead hide-on-medium-and-down container-wrap">
            <div className="col-12 row">
                <div className="col-5 row" style={{fontWeight: '500'}}>
                    <div className="header row col-2 justify-content-start">
                        <div className='back-btn' onClick={onClickBack}>
                            <span id="header-back-button">
                                <img src={icon_back}/> Back</span>
                        </div>
                    </div>
                    <div className="header col-4">
                        {subheader?.name}
                    </div>
                    <div className="header col-3">
                        ID: {subheader?.veh_id}
                    </div>
                    {window.is_admin&&
                    <div className="header col-3" style={{marginLeft: "-15px"}}>
                        {subheader?.phone_number}
                    </div>
                    }

                </div>
                <div className="header col-7 row">
                    <div className="header col-3">
                        <div className="header-btn header-datePicker">
                            <input onChange={onChangeDate} type="date" placeholder="mm/dd/yy"/>

                        </div>
                    </div>
                    <div className="header col-5">
                        <div className="header col-6 row" style={{marginRight: "15px"}}>
                            <Link to={`/messenger/${id}/attached/`}><div className="header-btn header-btn-blue">
                                <span>Attached Files</span>
                            </div>
                            </Link>
                        </div>
                        <div className="header col-6 row">
                            <Link className="header-btn header-btn-blue"
                                  to={'/callhistory/' + id}><span>Call History</span></Link>
                        </div>
                    </div>
                    {window.is_admin &&
                        <>
                        <div onClick={openEditProfileModal} className="header col-4">
                            <div className="header-btn" id="prof-edit-btn" style={{marginLeft: "15px"}}>
                                <span>Edit Profile</span>
                            </div>
                        </div>
                    </>
                    }
                </div>
            </div>
        </div>
    );
};

export default React.memo(MessengerSubheader, ((prevProps, nextProps) => prevProps.subheader === nextProps.subheader))
