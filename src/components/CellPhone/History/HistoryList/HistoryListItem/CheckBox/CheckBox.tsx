import React from 'react';

type propsType = {
    checked:boolean,
    callback:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export const CheckBox:React.FC<propsType> = ({checked,callback}) => {
    return (
        <div style={{marginRight: 10}}>
            <input onChange={callback} checked={checked} type="checkbox"/>
        </div>
    );
};
