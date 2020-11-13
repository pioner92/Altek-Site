import { connect } from 'react-redux';
import Header from './Header';
import { Fetch, driverFilterAction, selectDriversAllAction } from '../../Redux/Actions/OtherActions';
import { getDriversAction } from '../../Redux/Actions/GetDataActions/GetDataActions';
import {writeToStoreIsNewCallNotificationAction} from "../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";
import {updateCallNotificationAction} from "../../Redux/Actions/UpdateDateActions/UpdateDataActions";

const mapStateToProps = ({ inputFilterValue, selectedId, isSelectedAll,isNewCallNotification }) => ({
    inputFilterValue,
    selectedId,
    isSelectedAll,
    isNewCallNotification
});

export const HeaderContainer = connect(mapStateToProps, {
    driverFilterAction,
    selectDriversAllAction,
    Fetch,
    getDriversAction,
    writeToStoreIsNewCallNotificationAction,
    updateCallNotificationAction
})(Header);
