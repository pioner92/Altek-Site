import { connect } from 'react-redux';
import Messenger from './Messenger';
import   { Fetch,clearMessageList, sendSmsAction } from '../../Redux/Actions/OtherActions';
import { getMessageAction } from '../../Redux/Actions/GetDataActions/GetDataActions';

const mapStateToProps = ({
    drivers, messages, isFetching, newMessage, isNewMessage,
}) => ({
    drivers,
    messages,
    isFetching,
    newMessage,
    isNewMessage,
});

export const MessengerContainer = connect(mapStateToProps, {
    getMessageAction, Fetch, sendSmsAction, clearMessageList,
})(Messenger);
