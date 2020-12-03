import {connect, ConnectedProps} from 'react-redux';
import Messenger, {propsType} from './Messenger';
import   { Fetch,clearMessageList, sendSmsAction } from '../../Redux/Actions/OtherActions';
import { getMessageAction } from '../../Redux/Actions/GetDataActions/GetDataActions';
import {ReducerReturnType} from "../../Redux/Reducer/Reducer";

const mapStateToProps = ({drivers, messages, isFetching, newMessage, isNewMessage}:ReducerReturnType) => ({
    drivers,
    messages,
    isFetching,
    newMessage,
    isNewMessage,
});

export const connector = connect(mapStateToProps,{
    getMessageAction, Fetch, sendSmsAction, clearMessageList,
})

export type connectorType = ConnectedProps<typeof connector> & propsType

export const MessengerContainer = connector(Messenger);
