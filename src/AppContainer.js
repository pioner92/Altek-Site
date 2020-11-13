import { connect } from 'react-redux';
import App from './App';
import { checkSmsAction, newMessageAction } from './Redux/Actions/OtherActions';
import { addCallHistoryLinkAction } from './Redux/Actions/AddDataActions/AddDataActions';
import {writeToStoreIsNewCallNotificationAction} from "./Redux/Actions/WriteToStoreActions/WriteToStoreActions";
import {updateCallNotificationAction} from "./Redux/Actions/UpdateDateActions/UpdateDataActions";
import {getCallNotificationAction} from "./Redux/Actions/GetDataActions/GetDataActions";

const mapStateToProps = ({
    drivers, selectedId, isNewMessage, queueStatus,
}) => ({
    drivers,
    queueStatus,
    selectedId,
    isNewMessage,
});

export const AppContainer = connect(mapStateToProps, {
    checkSmsAction,
    newMessageAction,
    addCallHistoryLinkAction,
    writeToStoreIsNewCallNotificationAction,
    updateCallNotificationAction,
    getCallNotificationAction

})(App);
