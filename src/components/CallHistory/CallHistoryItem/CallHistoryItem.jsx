import React from 'react';
import iconTrash from '../../../static/icons/trash.svg';
import {IsAdmin} from "../../Validate/isAdmin";

const CallHistoryItem = ({
                             deleteCallHistoryAction, deleteCallHistoryItemFromListAction,
                             Data: {
                                 link, date, from,to, id, status
                             },
                         }) => {

    const deleteHistory = () => {
        deleteCallHistoryAction(id);
        deleteCallHistoryItemFromListAction(id);
    };

    return (
        <div className="table-item row">
            {/*<div className="col-1"/>*/}
            <div className="item-column col-12 col-lg-3">
                <div className="content">
                    {date}
                </div>
            </div>
            <IsAdmin flag={true}>
                <div className="item-column col-12 col-lg-2">
                    {from}
                </div>
            </IsAdmin>
            <div className="item-column col-12 col-lg-2">
                {to}
            </div>
            <div className="item-column col-12 col-lg-2">
                {status}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }} className="item-column col-12 col-lg-3">
                <audio style={{
                    height: '20px',
                    marginRight: '10px',
                    width: '200px'
                }} controls className="player" preload="false">
                    <source src={link}/>
                </audio>
                <div className="row align-items-center">
                    <IsAdmin flag={true}>
                        <div onClick={deleteHistory} className="trash-icon">
                            <img src={iconTrash}/>
                        </div>
                    </IsAdmin>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CallHistoryItem, ((prevProps, nextProps) => prevProps === nextProps));
