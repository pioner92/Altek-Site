import React from 'react';
import { Link } from 'react-router-dom';
import iconTrash from '../../../static/icons/trash.svg';

const GroupsItem = ({ openModalDeleteGroup, deleteItemNameAction, name }) => {
    const DeleteItem = () => {
        openModalDeleteGroup();
        deleteItemNameAction(name);
    };

    return (
        <div id="{{name}}" className="col-12 row justify-content-between mb-4 group_item">
            <Link to={`/settings/choosing/${name}`} style={{ display: 'contents' }}>
                <div className="col-6 col-lg-3 d-flex" style={{ paddingLeft: '80px' }}>
                    {name}
                </div>
            </Link>
            <div className="col-6 col-lg-3 d-flex justify-content-end del-group">
                <div onClick={DeleteItem} className="trash-icon" style={{ marginRight: '35px' }}>
                    <img src={iconTrash}/>
                </div>
            </div>
        </div>
    );
};

export default GroupsItem;
