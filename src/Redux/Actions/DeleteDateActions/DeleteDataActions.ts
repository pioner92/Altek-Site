import { DELETECALLHISTORYITEMFROMLIST, DELETEITEMNAME } from '../../Constants/Constant';
import { Ajax, clearDriverFromDriverList } from '../OtherActions';
import { getDispatchersAction, getGroupsAction } from '../GetDataActions/GetDataActions';

export type deleteItemNameActionType = {
    type: typeof DELETEITEMNAME,
    value: string,
}

export const deleteItemNameAction = (value: string): deleteItemNameActionType => ({
    type: DELETEITEMNAME,
    value,
});

export type deleteCallHistoryItemFromListActionType = {
    type: typeof DELETECALLHISTORYITEMFROMLIST,
    id: number,
}

export const deleteCallHistoryItemFromListAction = (id: number): deleteCallHistoryItemFromListActionType => ({
    type: DELETECALLHISTORYITEMFROMLIST,
    id,
});

export const deleteGroupAction = (name: string) => (dispatch: Function) => {
    const data = {
        action: 'delete_group',
        group_name: name,
    };
    Ajax({ data })
        .then(() => {
            dispatch(getGroupsAction());
        });
};

export const deleteDriverAction = (id: number) => (dispatch: Function) => {
    const data = {
        action: 'delete_post',
        id,
    };
    Ajax({ data }).then((res: any) => {
        if (res.result) {
            dispatch(clearDriverFromDriverList(id));
        }
    });
};

export const deleteDispatcherAction = (id: string) => (dispatch: Function) => {
    const data = {
        action: 'delete_dispatcher',
        id,
    };
    Ajax({ data })
        .then(() => {
            dispatch(getDispatchersAction());
        });
};

export const deleteCallHistoryAction = (id: string|Array<number>) => (dispatch: Function) => {
    const data = {
        action: 'delete_post',
        id,
    };
    Ajax({ data })
        .then(({ deleted, result }: any) => {
            console.log(`result ${result}`);
            console.log(`deleted ${deleted}`);
            dispatch(deleteCallHistoryItemFromListAction(deleted));
        });
};

export type deleteDriverActionType = typeof deleteDriverAction
export type deleteItemNameActionFn = typeof deleteItemNameAction
export type deleteGroupActionType = typeof deleteGroupAction
export type deleteCallHistoryActionType = typeof deleteCallHistoryAction
export type deleteCallHistoryItemFromListActionTypeFn = typeof deleteCallHistoryItemFromListAction
