import React from 'react';

const SubheaderTitle = () => (
    <div className="col-lg-11 row row-title">
        <div className="header col-lg-3">
                ID | Name
        </div>
        {window.is_admin
            && <div className="header col-2">
                Group
            </div>
        }

        <div className="header col-3">
            {window.is_admin ? 'Number' : 'Action'}
        </div>
        <div className="header col-4">
                Text
        </div>
    </div>
);

export default React.memo(SubheaderTitle, ((prevProps, nextProps) => prevProps === nextProps));
