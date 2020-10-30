import {writeResponsibleDispatcherActionDataType} from '../../Redux/Actions/WriteToStoreActions/WriteToStoreActions';

export const filterActiveDispatcher = (items: Array<writeResponsibleDispatcherActionDataType>, arr: Array<string>): Array<writeResponsibleDispatcherActionDataType> => {
    const filteredDispatchers: Array<writeResponsibleDispatcherActionDataType> = [];
    for (const el of items) {
        if (arr.includes(el.phone)) {
            filteredDispatchers.push(el);
        }
    }
    return filteredDispatchers;
};
