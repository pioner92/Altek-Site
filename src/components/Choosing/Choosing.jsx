import React, { useEffect } from 'react';
import ChoosingContent from './ChoosingContent/ChoosingContent';

const Choosing = (props) => {
    const {
        addToGroupDispatchersAction,
        groupData, addToGroupDriversAction, getGroupDataAction,
        match: { params: { groupName } },
    } = props;

    useEffect(() => {
        getGroupDataAction({ groupName });
    }, []);

    return (
        <>
            <ChoosingContent
                groupName={groupName}
                addToGroupDriversAction={addToGroupDriversAction}
                addToGroupDispatchersAction={addToGroupDispatchersAction}
                groupData={groupData}
            />
        </>
    );
};

export default Choosing;
