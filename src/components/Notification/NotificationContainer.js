import { connect } from 'react-redux';
import Notification from './Notification';
import { resetStatusNewMessageAction } from '../../Redux/Actions/OtherActions';

const mapStateToProps = ({ newMessage, isNewMessage }) => ({
    newMessage,
    isNewMessage,
});

export const NotificationContainer = connect(mapStateToProps, {
    resetStatusNewMessageAction,
})(Notification);
