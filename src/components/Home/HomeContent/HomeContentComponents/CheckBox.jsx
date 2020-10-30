import React from 'react';

const CheckBox = ({ selectedId, selectDriver, id }) => {
    const isChecked = selectedId.indexOf(id) !== -1;

    const onChangeCheckBox = () => {
        console.log(isChecked);
        selectDriver(id, isChecked);
    };

    return (
        <label className="b-contain">
            <span><div className="hide-on-medium-and-up header">Select</div></span>
            <input onChange={onChangeCheckBox} checked={isChecked} data-id={id}
                id='checkbox_row' type="checkbox"/>
            <div id={id} className="b-input"/>
        </label>
    );
};

export default CheckBox;
