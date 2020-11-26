import { connect, ConnectedProps} from 'react-redux';
import CallHistory, {ownPropsType} from './CallHistory';
import {Fetch} from '../../Redux/Actions/OtherActions';
import {
    getCallHistoryAction,
    getDriversAction
} from '../../Redux/Actions/GetDataActions/GetDataActions';
import {
    deleteCallHistoryAction,
    deleteCallHistoryItemFromListAction,
} from '../../Redux/Actions/DeleteDateActions/DeleteDataActions';
import {ReducerReturnType} from "../../Redux/Reducer/Reducer";
import {writeToStoreCallHistoryAction} from "../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";

const mapStateToProps = ({
                             drivers, callHistory, callHistoryPageCount, isFetching
                         }: ReducerReturnType) => ({
    drivers,
    callHistory,
    callHistoryPageCount,
    isFetching,
});

const connector = connect(mapStateToProps, {
    getCallHistoryAction,
    Fetch,
    deleteCallHistoryAction,
    deleteCallHistoryItemFromListAction,
    getDriversAction,
    writeToStoreCallHistoryAction
})

export type connectorType = ConnectedProps<typeof connector> & ownPropsType


export const CallHistoryContainer = connector(CallHistory)
