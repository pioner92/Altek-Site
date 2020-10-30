import React, { useRef } from 'react';

const ChoosingDriver = ({
    name, id, isChecked, veh_id, onChangeCheckboxDrivers,in_group
}) => {
    const checkBoxRef = useRef();

    const onChange = () => {
        onChangeCheckboxDrivers(id, checkBoxRef.current.checked);
    };

    if(in_group){
        // checkBoxRef.current.checked = true
    }

    return (
        <label data-id={id} className="b-contain" style={{ marginBottom: '30px' }}>
            <span>
                <div className="header">{veh_id}  {name}</div>
            </span>
            <input ref={checkBoxRef} checked={in_group} onChange={onChange} id={id} type="checkbox"/>
            <div className="b-input"/>
        </label>
    );
};

export default ChoosingDriver;
