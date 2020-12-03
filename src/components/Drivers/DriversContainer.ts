import {connect, ConnectedProps} from 'react-redux';
import Drivers, {propsType} from './Drivers';
import {Fetch}  from '../../Redux/Actions/OtherActions';
import { getDriversAction } from '../../Redux/Actions/GetDataActions/GetDataActions';
import { deleteDriverAction } from '../../Redux/Actions/DeleteDateActions/DeleteDataActions';
import {ReducerReturnType} from "../../Redux/Reducer/Reducer";

const mapStateToProps = ({ drivers, driversPagesCount }:ReducerReturnType) => ({
    drivers,
    driversPagesCount,
});

const connector = connect(mapStateToProps,{
    getDriversAction, Fetch, deleteDriverAction,
})

export type connectorType = ConnectedProps<typeof connector> & propsType

export const DriversContainer = connector(Drivers);
