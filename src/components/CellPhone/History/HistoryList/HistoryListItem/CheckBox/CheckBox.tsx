import React from 'react';

type propsType = {
    checked:boolean
}

export const CheckBox:React.FC<propsType> = ({checked}) => {
    return (
        <div style={{marginRight: 10}}>
            <input checked={checked} type="checkbox"/>
        </div>
    );
};
