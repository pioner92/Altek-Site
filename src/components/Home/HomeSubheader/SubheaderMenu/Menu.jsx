import React from 'react';

const Menu = ({ children }) => (
    <div className="col-lg-11 row list-headers-sortbar">
        {children}
    </div>
);

export default React.memo(Menu, ((prevProps,
    nextProps) => prevProps === nextProps));
