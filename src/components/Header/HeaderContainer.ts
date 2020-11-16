import {connect, ConnectedProps} from 'react-redux';
import {Header,ownerProps} from './Header';
import { Fetch, driverFilterAction, selectDriversAllAction } from '../../Redux/Actions/OtherActions';
import { getDriversAction } from '../../Redux/Actions/GetDataActions/GetDataActions';
import {writeToStoreIsNewCallNotificationAction} from "../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";
import {updateCallNotificationAction} from "../../Redux/Actions/UpdateDateActions/UpdateDataActions";
import {ReducerReturnType} from "../../Redux/Reducer/Reducer";

const mapStateToProps = ({ inputFilterValue, selectedId, isSelectedAll,isNewCallNotification }:ReducerReturnType) => ({
    inputFilterValue,
    selectedId,
    isSelectedAll,
    isNewCallNotification
});

const connector = connect(mapStateToProps,{
    driverFilterAction,
    selectDriversAllAction,
    Fetch,
    getDriversAction,
    writeToStoreIsNewCallNotificationAction,
    updateCallNotificationAction
})

export type connectorType = ConnectedProps<typeof connector> & ownerProps

export const HeaderContainer = connector(Header);
