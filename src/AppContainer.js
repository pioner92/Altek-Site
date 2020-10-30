import { connect } from 'react-redux';
import App from './App';
import { checkSmsAction, newMessageAction } from './Redux/Actions/OtherActions';
import { addCallHistoryLinkAction } from './Redux/Actions/AddDataActions/AddDataActions';

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
})(App);
