import React from 'react';
import { Link } from 'react-router-dom';

const Name = ({ name, veh_id, id }) => (
    <Link to={`/messenger/${id}`} style={{ display: 'contents' }}>
        <div className="id-name-column item-column col-12 col-lg-3">
            <div className="hide-on-medium-and-up header">ID | Name:</div>
            <div className="content">ID: {veh_id} <br/> {name}</div>
        </div>
    </Link>
);

export default Name;
