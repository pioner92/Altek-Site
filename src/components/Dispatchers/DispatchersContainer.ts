import {connect, ConnectedProps} from 'react-redux';
import Dispatchers from './Dispatchers';
import {Fetch}  from '../../Redux/Actions/OtherActions';
import { deleteDispatcherAction } from '../../Redux/Actions/DeleteDateActions/DeleteDataActions';
import {getActiveDispatchersAction, getDispatchersAction} from '../../Redux/Actions/GetDataActions/GetDataActions';
import {ReducerReturnType} from "../../Redux/Reducer/Reducer";
import {writeToStoreActiveDispatchersAction} from "../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";



const mapStateToProps = ({ dispatchers }:ReducerReturnType) => ({
    dispatchers
});

const connector = connect(mapStateToProps,{ getDispatchersAction,
    Fetch, deleteDispatcherAction,writeToStoreActiveDispatchersAction})

export type connectPropsType = ConnectedProps<typeof connector>

export const DispatchersContainer = connector(Dispatchers);