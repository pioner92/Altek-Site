import {Dispatch} from 'redux';
import {
    writeResponsibleDispatcherAction,
    writeToStoreActiveDispatchersAction,
    writeToStoreCallHistoryAction,
    writeToStoreCallNotificationAction,
    writeToStoreDispatchersAction,
    writeToStoreDriversAction,
    writeToStoreGroupDataAction,
    writeToStoreGroupsAction,
    writeToStoreIsNewCallNotificationAction,
    writeToStoreMessagesAction,
} from '../WriteToStoreActions/WriteToStoreActions';
import {Ajax, Fetch} from '../OtherActions';
import {filterActiveDispatcher} from '../../../utils/callQueu/filterActiveDispatchers';
import {getDispatcherQueue} from "../../../components/CellPhone/api/get-active-dispatchers";

export type dataFnGetDrivers = {
    n?: string
    inputValue?: string
    filterStatusTitle?: string
}
type actionType<T> = (obj: T) => Function;

type withoutParamsAction = () => Function;

type dataDrivers = {
    action: string
    page?: string
    search?: string
    is_working?: boolean
    not_working?: boolean
    fired?: boolean
}

type callHistoryFnData = {
    id?: string
    n?: string
    author_id?: string
    author?:'self'
}

type historyData = {
    action: string
    id?: string
    page?: string
    caller?: string
    author?:'self'
}

type groupData = {
    action: string
}

type groupDataFnData = {
    groupName: string
}

type groupData_Data = {
    action: string
    group_name: string
}

type getMessageFnData = {
    action: string
    id: string
    date?: string
}

export const getDriversAction: actionType<dataFnGetDrivers> = ({n, inputValue, filterStatusTitle}) => {
    const data: dataDrivers = {
        action: 'get_drivers',
    };
    if (n) {
        data.page = n;
    }
    if (inputValue) {
        data.search = inputValue;
    }
    if (filterStatusTitle) {
        switch (filterStatusTitle) {
            case 'is_working':
                data.is_working = true;
                break;
            case 'not_working':
                data.not_working = true;
                break;
            case 'fired':
                data.fired = true;
                break;
            default:
                break;
        }
    }
    console.log(data);
    return Fetch({action: writeToStoreDriversAction, data});
};

export const getCallHistoryAction: actionType<callHistoryFnData> = ({id, n, author_id,author}) => {
    const data: historyData = {
        action: 'get_call_history',
    };
    if (id) {
        data.id = id;
    }
    if (n) {
        data.page = n;
    }
    if (author_id) {
        data.caller = author_id;
    }
    if(author){
        data.author = author
    }
    return Fetch({action: writeToStoreCallHistoryAction, data});
};

export const getGroupsAction: withoutParamsAction = () => {
    const data: groupData = {
        action: 'get_groups',
    };
    return Fetch({action: writeToStoreGroupsAction, data});
};

export const getDispatchersAction: withoutParamsAction = () => {
    const data = {
        action: 'get_dispatchers',
    };
    return Fetch({action: writeToStoreDispatchersAction, data});
};

export const getGroupDataAction: actionType<groupDataFnData> = ({groupName}) => {
    const data_group: groupData_Data = {
        action: 'get_group',
        group_name: groupName,
    };
    getDispatchersAction();
    return Fetch({action: writeToStoreGroupDataAction, data: data_group});
};

export const getMessageAction: actionType<getMessageFnData> = ({action, id, date}) => {
    const data: getMessageFnData = {
        action: 'get_messages',
        id,
    };
    if (action && action === 'attached') {
        data.action = 'get_attachments';
    }
    if (date) {
        data.date = date;
    }
    return Fetch({action: writeToStoreMessagesAction, data});
};

export const getResponsibleAction = (id: number) => {
    const data = {
        action: 'get_responsible',
        driver_id: id,
        // driver_phone: "+15703144444"
    };
    return Fetch({action: writeResponsibleDispatcherAction, data});
};

export const getActiveDispatchersAction = (company_name: string) => (dispatch: Dispatch) => {
    const data = {
        action: 'get_dispatchers',
    };
    Ajax({data}).then((result: any) => {
        getDispatcherQueue(company_name)
            .then((data) => {
                if(data){
                    const dispatchersArr = filterActiveDispatcher(result, data);
                    dispatch(writeToStoreActiveDispatchersAction(dispatchersArr));
                    dispatch(writeToStoreDispatchersAction(result));
                }
            });
    });
};

export type getCallNotificationContent = Array<{ id: number, text: string,read:'0'| '1',date:string }>

export type getCallNotificationResponse = {
    content: getCallNotificationContent
    unread_count:number
}

export const getCallNotificationAction = () => {
    return (dispatch: Dispatch) => {
        const data = {
            action: 'get_notifications'
        }
        Ajax<getCallNotificationResponse>({data})
            .then((result) => {
                if (result.unread_count>0) {
                    dispatch(writeToStoreIsNewCallNotificationAction(true))
                }
                dispatch(writeToStoreCallNotificationAction(result))
            })
    }
}

export type getDriversActionType = typeof getDriversAction
export type getCallHistoryActionType = typeof getCallHistoryAction
export type getGroupsActionType = typeof getGroupsAction
export type getMessageActionType = typeof getMessageAction
export type getDispatchersActionType = typeof getDispatchersAction
export type getGroupDataActionType = typeof getGroupDataAction
export type getResponsibleActionType = typeof getResponsibleAction
