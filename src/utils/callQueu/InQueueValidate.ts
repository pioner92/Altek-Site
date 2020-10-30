import {responseDispatchersDataType} from '../../Redux/Actions/WriteToStoreActions/WriteToStoreActions';

export const InQueueValidate = (data: Array<responseDispatchersDataType>, number: string): boolean => {
    for (const el of data) {
        if (el.phone === number) {
            return true;
        }
    }
    return false;
};
