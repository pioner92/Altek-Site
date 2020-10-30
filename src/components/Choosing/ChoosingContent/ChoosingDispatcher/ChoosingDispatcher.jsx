import React, { useRef } from 'react';

const ChoosingDispatcher = ({
    name, id, onChangeCheckbox,in_group
}) => {
    const checkBoxRef = useRef();

    const onChange = () => {
        onChangeCheckbox(id, checkBoxRef.current.checked);
    };

    if(in_group){
        // checkBoxRef.current.checked = true
    }

    return (
        <label data-id={id} className="b-contain" style={{ marginBottom: '40px' }}>
            <span>
                <div className="header">{name}</div>
            </span>
            <span>
                <div className="header">{id}</div>
            </span>
            <input ref={checkBoxRef} checked={in_group} onChange={onChange} id={id} type="checkbox"/>
            <div className="b-input"/>
        </label>
    );
};

export default ChoosingDispatcher;
