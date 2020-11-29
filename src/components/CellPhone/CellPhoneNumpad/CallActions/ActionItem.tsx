import React from 'react';

type propsType = {
    icon:string
    callback:()=>void
}

export const ActionItem:React.FC<propsType> = ({children,callback,icon}) => {
    return (
        <div onClick={callback} className="action">
            <div className="p-icon"><img src={icon} alt=""/></div>
            <span>{children}</span>
        </div>
    );
};
