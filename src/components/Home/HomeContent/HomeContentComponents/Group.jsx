import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Group = ({ group }) => (
    <>
        {group
            ? <Link to={`/settings/choosing/${group}`} style={{ cursor: 'pointer' }} className="group-column item-column col-12 col-lg-2">
                <div className="hide-on-medium-and-up header">Group:</div>
                <div className="content">{group}</div>
            </Link>
            : <div className="group-column item-column col-12 col-lg-2">
                <div className="hide-on-medium-and-up header">Group:</div>
                <div className="content"/>
            </div>
        }
    </>
);

export default Group;
