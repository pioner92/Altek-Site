import React from 'react';

type propsType = {
    icon:string
    callback:()=>void
    isActive?:boolean
}

export const ActionItem:React.FC<propsType> = ({children,callback,icon,isActive=false}) => {
    return (
        <div onClick={callback} className={`action ${isActive?'active':''}`}>
            <div className="p-icon"><img src={icon} alt=""/></div>
            <span>{children}</span>
        </div>
    );
};
