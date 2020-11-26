import React from 'react';
import { IsAdmin } from "../../Validate/isAdmin";

const CallHistorySubheader = () => (
    <div className="row container-wrap hide-on-medium-and-down table-head"
         style={{ paddingRight: '40px' }}>
        <div className="header col-3">
            Date
        </div>
        <IsAdmin flag={true}>
            <div className="header col-2">
                From
            </div>
        </IsAdmin>
        <div className="header col-2">
            To
        </div>
        <div className="header col-2">
            Status
        </div>
        <div className="header col-3">
            Result
        </div>
    </div>
);

export default React.memo(CallHistorySubheader, ((prevProps, nextProps) => prevProps === nextProps));
