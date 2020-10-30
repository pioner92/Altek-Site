import React from 'react';

const ChoosingSubheader = (props) => {
    const { updateGroupAction, groupData, groupName } = props;

    const onClickSave = () => {
        const drivers = {};
        const dispatchers = {};
        groupData.drivers.forEach((el) => {
            drivers[`${el.id}`] = el.in_group;
        });
        groupData.dispatchers.forEach((el) => {
            dispatchers[`${el.id}`] = el.in_group;
        });

        const postData = {
            action: 'update_group_users',
            group_name: groupName,
            dispatchers,
            drivers,
        };
        updateGroupAction(postData);
    };
    return (
        <div className="row table-head justify-content-between hide-on-medium-and-down" style={{ paddingRight: '15px' }}>
            <div className="header col-2 d-flex justify-content-end"/>
            <div className="header col-4 d-flex justify-content-start">
                Drivers
            </div>
            <div className="header col-4 d-flex justify-content-start">
                Dispatchers
            </div>
            <div className="header col-2 d-flex justify-content-center">
                <div onClick={onClickSave} className="header-btn header-round-btn">
                    <span>Save</span>
                </div>
            </div>
        </div>
    );
};

export default ChoosingSubheader;
