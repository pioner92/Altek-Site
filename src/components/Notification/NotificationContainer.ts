import {connect, ConnectedProps} from 'react-redux';
import {Notification} from './Notification';
import { resetStatusNewMessageAction } from '../../Redux/Actions/OtherActions';
import {ReducerReturnType} from "../../Redux/Reducer/Reducer";

const mapStateToProps = ({ newMessage, isNewMessage }:ReducerReturnType) => ({
    newMessage,
    isNewMessage,
});

const connector = connect(mapStateToProps,{
    resetStatusNewMessageAction,
})

export type connectorType = ConnectedProps<typeof connector>

export const NotificationContainer = connector(Notification)
