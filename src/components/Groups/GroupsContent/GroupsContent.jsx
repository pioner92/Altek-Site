import React, { useContext } from 'react';
import GroupsItem from '../GroupsItem/GroupsItem';
import { Context } from '../../Context/Context';

const GroupsContent = ({ deleteItemNameAction, groups }) => {
    const { setIsVisibleNewGroupModal, setIsVisibleDeleteGroupModal } = useContext(Context);

    const openModalNewGroup = () => {
        setIsVisibleNewGroupModal(true);
    };
    const openModalDeleteGroup = () => {
        setIsVisibleDeleteGroupModal(true);
    };

    return (
        <div className="block col-lg-9 col-12">
            <div className="block-title">
                <span>Groups</span>
            </div>
            <div className="table-wrapper">
                <div className="row table-head justify-content-between">
                    <div className="header col-6 col-lg-3" style={{ paddingLeft: '80px' }}>
                        Group name
                    </div>
                    <div className="header col-6 col-lg-3">
                        <div onClick={openModalNewGroup} className="header-btn header-round-btn" id="add-group-btn">
                            <span>Add a new group</span>
                        </div>
                    </div>
                </div>
                <div className="table-content">
                    <div className="scroll-view">
                        {groups.map((el) => (
                            <GroupsItem
                                deleteItemNameAction={deleteItemNameAction}
                                openModalDeleteGroup={openModalDeleteGroup}
                                key={el.id}
                                name={el.name}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(GroupsContent, ((prevProps, nextProps) => prevProps.groups === nextProps.groups));
