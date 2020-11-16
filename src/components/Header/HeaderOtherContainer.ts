import {connect, ConnectedProps} from 'react-redux';
import  {HeaderOther,ownerType} from './HeaderOther';
import { getCallHistoryAction, getDriversAction } from '../../Redux/Actions/GetDataActions/GetDataActions';
import { driverFilterAction } from '../../Redux/Actions/OtherActions';
import {ReducerReturnType} from "../../Redux/Reducer/Reducer";
import {ownerProps} from "./Header";

const mapStateToProps = ({ inputFilterValue }:ReducerReturnType) => ({
    inputFilterValue,
});

const connector = connect(mapStateToProps,{
    getDriversAction,
    driverFilterAction,
    getCallHistoryAction,
})

export type connectorType = ConnectedProps<typeof connector> & ownerType


export const HeaderOtherContainer = connector(HeaderOther);
