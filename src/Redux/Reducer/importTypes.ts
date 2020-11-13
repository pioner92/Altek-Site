import {
    addToGroupDispatchersActionType,
    addToGroupDriversActionType,
    clearDriverFromDriverListType, clearMessageListType,
    driverFilterActionType, isFetchingActionType, newMessageActionType, resetStatusNewMessageActionType,
    selectDriverActionType,
    selectDriversAllActionType
} from "../Actions/OtherActions";
import {
    clearFilterStatusDriversActionType,
    writeResponsibleDispatcherActionType,
    writeToStoreActiveDispatchersActionType,
    writeToStoreCallHistoryActionType, writeToStoreCallNotificationActionType,
    writeToStoreDispatchersActionType,
    writeToStoreDriversActionType,
    writeToStoreFilterStatusDriverActionType,
    writeToStoreGroupDataActionType,
    writeToStoreGroupsActionType, writeToStoreIsNewCallNotificationActionType,
    writeToStoreMessagesActionType,
    writeToStoreQueueStatusType,
    writeToStoreSelectedDispatcherType,
    writeToStoreSelectedDriverType
} from "../Actions/WriteToStoreActions/WriteToStoreActions";
import {addMessageType} from "../Actions/AddDataActions/AddDataActions";
import {
    deleteCallHistoryItemFromListActionType,
    deleteItemNameActionType
} from "../Actions/DeleteDateActions/DeleteDataActions";
import {clearSelectDriversType} from "../Actions/UpdateDateActions/UpdateDataActions";

export type ImportTypesData  =  driverFilterActionType
        | writeToStoreDriversActionType
        | selectDriversAllActionType
        | selectDriverActionType
        | clearDriverFromDriverListType
        | newMessageActionType
        | addToGroupDriversActionType
        | addToGroupDispatchersActionType
        | resetStatusNewMessageActionType
        | clearMessageListType
        | writeToStoreCallHistoryActionType
        | writeToStoreDispatchersActionType
        | writeToStoreMessagesActionType
        | writeToStoreGroupsActionType
        | writeToStoreGroupDataActionType
        | writeToStoreFilterStatusDriverActionType
        | writeResponsibleDispatcherActionType
        | clearFilterStatusDriversActionType
        | addMessageType
        | deleteItemNameActionType
        | deleteCallHistoryItemFromListActionType
        | clearSelectDriversType
        | isFetchingActionType
        | writeToStoreActiveDispatchersActionType
        | writeToStoreSelectedDispatcherType
        | writeToStoreSelectedDriverType
        | writeToStoreQueueStatusType
        | writeToStoreIsNewCallNotificationActionType
        | writeToStoreCallNotificationActionType

