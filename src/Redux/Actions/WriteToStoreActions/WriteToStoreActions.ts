import {
    CLEARFILTERSTATUSDRIVERS,
    FILTERSTATUSDRIVERS,
    GETCALLHISTORY,
    GETDISPATHCERS,
    GETDRIVERS,
    GETGROUPDATA,
    GETGROUPS,
    GETMESSAGES,
    GETRESPONSIBLE,
    WRITETOSTOREACTIVEDISPATCHERS,
    WRITETOSTOREQUEUESTATUS,
    WRITETOSTORESELECTEDDISPATCHER,
    WRITETOSTORESELECTEDDRIVER,
} from '../../Constants/Constant';

export type responseDriverDataType = {
    all_read: string
    email: string
    group: string
    id: number
    index: string
    is_fired: string
    is_working: string
    message: { text: string, last_message_time: string, count: string }
    name: string
    not_working_day: string
    not_working_time: string
    number: string
    sms_id: string
    veh_id: string
}

type writeToStoreDriversActionDataType = {
    result: Array<responseDriverDataType>
    pages_count: string
}

type writeToStoreDriversType = {
    type: typeof GETDRIVERS,
}

export type writeToStoreDriversActionType = writeToStoreDriversType & writeToStoreDriversActionDataType

export const writeToStoreDriversAction = ({ result, pages_count }: writeToStoreDriversActionDataType)
    : writeToStoreDriversActionType => {
    console.log(result);
    console.log(pages_count);
    return {
        type: GETDRIVERS,
        result,
        pages_count,
    };
};

export type writeToStoreCallHistoryActionDataType = {
    history: Array<{ link: string, date: string, number: string, id: number, author: string }>
    user: string[]
    pages_count: number
}

type writeToStoreCallHistoryType = {
    type: typeof GETCALLHISTORY,
}
export type writeToStoreCallHistoryActionType = writeToStoreCallHistoryType & writeToStoreCallHistoryActionDataType

export const writeToStoreCallHistoryAction = ({ history, user, pages_count }: writeToStoreCallHistoryActionDataType)
    : writeToStoreCallHistoryActionType => ({
    type: GETCALLHISTORY,
    history,
    user,
    pages_count,
});

export type responseDispatchersDataType = {
    email: string
    group: string
    id: number
    login: string
    name: string
    phone: string
}

export type writeToStoreDispatchersActionType = {
    type: typeof GETDISPATHCERS,
    dispatchers: Array<responseDispatchersDataType>
}

export const writeToStoreDispatchersAction = (data: Array<responseDispatchersDataType>)
    : writeToStoreDispatchersActionType => ({
    type: GETDISPATHCERS,
    dispatchers: data,
});

export type writeToStoreMessagesActionType = {
    type: typeof GETMESSAGES,
    messages: Array<messagesType>,
    subheader: messageSubheaderType,
}

export type messagesType = {
    link: string
    media: string
    message: string
    published: string
    read_by: string
    send_by: string
    type: boolean
    variant: string
}
export type messageSubheaderType = {
    id: string
    name: string
    phone_number: string
}

export type messagesDataType = {
    messages: Array<messagesType>
    subheader: Array<messageSubheaderType>
}

export const writeToStoreMessagesAction = (data: messagesDataType): writeToStoreMessagesActionType => ({
    type: GETMESSAGES,
    messages: data.messages,
    subheader: data.subheader[0],
});

export type groupDataType = {
    drivers: Array<{
        id: number
        in_group: string
    }>
    dispatchers: Array<{
        id: number
        in_group: string
    }>
}

export type writeToStoreGroupDataActionType = {
    type: typeof GETGROUPDATA,
    groupData: groupDataType
}

export const writeToStoreGroupDataAction = (data: any) => {
    console.log(data);
    return {
        type: GETGROUPDATA,
        groupData: data,
    };
};

export type writeToStoreGroupsActionType = {
    type: typeof GETGROUPS,
    groups: any,
}

export const writeToStoreGroupsAction = (data: any) => ({
    type: GETGROUPS,
    groups: data,
});

export type writeToStoreFilterStatusDriverActionType = {
    type: typeof FILTERSTATUSDRIVERS,
    filterStatusTitle: string,
}

export const writeToStoreFilterStatusDriverAction = (filterStatusTitle: string)
    : writeToStoreFilterStatusDriverActionType => ({
    type: FILTERSTATUSDRIVERS,
    filterStatusTitle,
});

export type clearFilterStatusDriversActionType = {
    type: typeof CLEARFILTERSTATUSDRIVERS,
}

export const clearFilterStatusDriversAction = (): clearFilterStatusDriversActionType => ({
    type: CLEARFILTERSTATUSDRIVERS,
});

export type writeResponsibleDispatcherActionType = {
    type: typeof GETRESPONSIBLE,
    data: writeResponsibleDispatcherActionDataType
}

export type writeResponsibleDispatcherActionDataType = {
    email: string
    group: string
    id: number
    login: string
    name: string
    phone: string
}

export const writeResponsibleDispatcherAction = (data: writeResponsibleDispatcherActionDataType)
    : writeResponsibleDispatcherActionType => {
    console.log(data);
    return {
        type: GETRESPONSIBLE,
        data,
    };
};

export type writeToStoreSelectedDriverType = {
    type: typeof WRITETOSTORESELECTEDDRIVER
    data: responseDriverDataType
}

export const writeToStoreSelectedDriver = (data: responseDriverDataType): writeToStoreSelectedDriverType => ({
    type: WRITETOSTORESELECTEDDRIVER,
    data,
});

export type writeToStoreSelectedDispatcherType = {
    type: typeof WRITETOSTORESELECTEDDISPATCHER
    data: responseDispatchersDataType
}

export const writeToStoreSelectedDispatcher = (data: responseDispatchersDataType): writeToStoreSelectedDispatcherType => {
    console.log(data);
    return {
        type: WRITETOSTORESELECTEDDISPATCHER,
        data,
    };
};

export type writeToStoreActiveDispatchersActionType = {
    type: typeof WRITETOSTOREACTIVEDISPATCHERS
    data: Array<responseDispatchersDataType>
}

export const writeToStoreActiveDispatchersAction = (data: Array<responseDispatchersDataType>): writeToStoreActiveDispatchersActionType => ({
    type: WRITETOSTOREACTIVEDISPATCHERS,
    data,
});

export type writeToStoreQueueStatusType = {
    type: typeof WRITETOSTOREQUEUESTATUS,
    status: boolean
}

export const writeToStoreQueueStatusAction = (status: boolean): writeToStoreQueueStatusType => ({
    type: WRITETOSTOREQUEUESTATUS,
    status,
});
