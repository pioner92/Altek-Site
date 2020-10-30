// @ts-ignore
import jQuery from 'jquery';
import {
    ADDTOGROUPDISPATCHERS,
    ADDTOGROUPDRIVERS,
    CLEARDRIVERFROMDRIVERLIST,
    CLEARMESSAGESLIST,
    DRIVERFILTER,
    ISNEWMESSAGE,
    RESETSTATISNEWMESSAGE,
    SELECTDRIVER,
    SELECTEDALLDRIVERS,
    SETISFETCHING,
} from '../Constants/Constant';
import { addMessage } from './AddDataActions/AddDataActions';

export type isFetchingActionType = {
    type: typeof SETISFETCHING,
    status: boolean,
}

export const isFetchingAction = (status: boolean): isFetchingActionType => ({
    type: SETISFETCHING,
    status,
});

// Get json data
export const Fetch = ({ action, data }: any) => (dispatch: Function) => {
    dispatch(isFetchingAction(true));
    jQuery.ajax({
        url: '/wp-admin/admin-ajax.php',
        data,
        type: 'POST',
        dataType: 'json',
        success(response: Response) {
            dispatch(isFetchingAction(false));
            console.log(response);
            if (action) {
                dispatch(action(response));
            }
        },
    });
};

export type driverFilterActionType = {
    type: typeof DRIVERFILTER,
    text: string,
}

export const driverFilterAction = (text: string): driverFilterActionType => ({
    type: DRIVERFILTER,
    text,
});

export type selectDriversAllActionType = {
    type: typeof SELECTEDALLDRIVERS,
    isChecked: boolean,
}

export const selectDriversAllAction = (isChecked: boolean): selectDriversAllActionType => ({
    type: SELECTEDALLDRIVERS,
    isChecked,
});

export type selectDriverActionType = {
    type: typeof SELECTDRIVER
    id: number,
    isChecked: boolean,
}

export const selectDriverAction = (id: number, isChecked: boolean): selectDriverActionType => {
    console.log(id);
    console.log(isChecked);
    return {
        type: SELECTDRIVER,
        id,
        isChecked,
    };
};

// Update - delete data
export async function Ajax<T>({ data }: any): Promise<T> {
    return new Promise(((resolve) => {
        jQuery.ajax({
            url: '/wp-admin/admin-ajax.php',
            data,
            type: 'POST',
            dataType: 'json',
            success(response: any) {
                resolve(response);
            },
        });
    }
    ));
}

type sendSmsActionDataType = {
    data: {
        action: string
        ids: string[]
        message: string
    }
    isFromChat: boolean
}

export const sendSmsAction = ({ data, isFromChat }: sendSmsActionDataType) => (dispatch: Function) => {
    console.log(data);
    Ajax({ data })
        .then(({ success }: any) => {
            if (isFromChat && success) {
                dispatch(addMessage(data.message));
            }
        });
};

export const sendFileAction = ({ file }: any) => {
    const f = new FormData();
    f.append('file', file);
    f.append('action', 'add_attachment');
    return () => {
        Ajax({ data: f }).then((res) => console.log(res));
    };
};

export type clearDriverFromDriverListType = {
    type: typeof CLEARDRIVERFROMDRIVERLIST,
    id: number,
}

export const clearDriverFromDriverList = (id: number): clearDriverFromDriverListType => ({
    type: CLEARDRIVERFROMDRIVERLIST,
    id,
});

type newMessageActionDataType = {
    status: boolean
    from: string
    msg: Array<msg>
}

export type newMessageActionReturnType = {
    type: typeof ISNEWMESSAGE,
}

export type newMessageActionType = newMessageActionDataType & newMessageActionReturnType

type msg = {
    driver_id: number
    from: string
    link: string
    name: string
    react_link: string
    read_by: string | null
    text: string
    time: string
}

export const newMessageAction = ({ status, msg, from }: newMessageActionDataType): newMessageActionType => ({
    type: ISNEWMESSAGE,
    status,
    msg,
    from,
});

export const checkSmsAction = () => (dispatch: Function) => {
    const data = {
        action: 'checkMessages',
    };
    Ajax({ data })
        .then((newData: any) => {
            console.log(newData);
            if (newData.status) {
                dispatch(newMessageAction(newData));
            }
        });
};

export type addToGroupDriversActionType = {
    type: typeof ADDTOGROUPDRIVERS,
    id: number,
    status: string,
}

export const addToGroupDriversAction = (id: number, status: string): addToGroupDriversActionType => ({
    type: ADDTOGROUPDRIVERS,
    id,
    status,
});

export type addToGroupDispatchersActionType = {
    type: typeof ADDTOGROUPDISPATCHERS,
    id: number,
    status: string,
}

export const addToGroupDispatchersAction = (id: number, status: string): addToGroupDispatchersActionType => ({
    type: ADDTOGROUPDISPATCHERS,
    id,
    status,
});

export type resetStatusNewMessageActionType = {
    type: typeof RESETSTATISNEWMESSAGE,
}

export const resetStatusNewMessageAction = (): resetStatusNewMessageActionType => ({
    type: RESETSTATISNEWMESSAGE,
});

export type clearMessageListType = {
    type: typeof CLEARMESSAGESLIST,
}

export const clearMessageList = (): clearMessageListType => ({
    type: CLEARMESSAGESLIST,
});
