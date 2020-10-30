import React, { useEffect } from 'react';
import GroupsContent from './GroupsContent/GroupsContent';

const Groups = ({
    groups, getGroupsAction, deleteItemNameAction,
}) => {
    useEffect(() => {
        getGroupsAction();
    }, []);
    return (
        <>
            <GroupsContent deleteItemNameAction={deleteItemNameAction} groups={groups}/>
        </>
    );
};

export default React.memo(Groups, ((prevProps, nextProps) => prevProps.groups === nextProps.groups));
