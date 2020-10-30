import { getDispatchersAction, getDriversAction, getGroupsAction } from '../GetDataActions/GetDataActions';
import { Ajax } from '../OtherActions';
import { ADDMESSAGE } from '../../Constants/Constant';

type addNewDispatcherActionDataType = {
    login: string
    name: string
    email: string
    ext: string
    password: string
}

export const addNewDispatcherAction = (dispatcherData:addNewDispatcherActionDataType) => (dispatch:Function) => {
    const data = {
        action: 'add_dispatcher',
        login: dispatcherData.login,
        name: dispatcherData.name,
        email: dispatcherData.email,
        ext: dispatcherData.ext,
        password: dispatcherData.password,
    };

    Ajax({ data })
        .then(() => dispatch(getDispatchersAction()));
};

type addNewDriverActionDataType = {
    veh_id: string
    phone: string
    name: string
    email: string
}

export const addNewDriverAction = (driverData:addNewDriverActionDataType) => (dispatch:Function) => {
    const data = {
        action: 'update_driver',
        veh_id: driverData.veh_id,
        phone: driverData.phone,
        name: driverData.name,
        email: driverData.email,
    };
    Ajax({ data })
        .then((newData:any) => {
            dispatch(getDriversAction(newData));
        });
};

export const addNewGroupAction = (name:string) => (dispatch:Function) => {
    const data = {
        action: 'add_group',
        group_name: name,
    };
    Ajax({ data })
        .then(() => {
            dispatch(getGroupsAction());
        });
};

type addCallHistoryLinkActionDataType = {
    id:string
    link:string
}

export const addCallHistoryLinkAction = ({ id, link }:addCallHistoryLinkActionDataType) => {
    const data = {
        action: 'send_link',
        id,
        link,
        from: 'admin',
    };
    return (dispatch:Function) => {
        Ajax({ data }).then((newData) => {
            console.log(newData);
        });
    };
};

export type addMessageType = {
    type: typeof ADDMESSAGE,
    text:string,
}

export const addMessage = (text:string):addMessageType => ({
    type: ADDMESSAGE,
    text,
});

export type addNewDispatcherActionType = typeof addNewDispatcherAction
export type addNewDriverActionType = typeof addNewDriverAction
export type addNewGroupActionType = typeof addNewGroupAction