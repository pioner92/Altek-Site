import React from 'react';
import {SendTo} from "./SendTo/SendTo";
import {CoverPageNotes} from "./CoverPageNotes";
import {AttachFiles} from "./AttachFiles";


export const Fax = () => {
    return (
        <div>
            <div className="cellphone-page-body" style={{paddingTop: 10}}>
                <div className="telephony-form">
                    <SendTo/>
                    <CoverPageNotes/>
                    <AttachFiles/>
                    <div className="form-group">
                        <button className="c-form-control large-btn">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
