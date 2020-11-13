import {connect, ConnectedProps} from 'react-redux'
import {CallNotification, propsType} from "./CallNotification";
import {ReducerReturnType} from "../../../Redux/Reducer/Reducer";

const mapStateToProps = ({callNotificationContent}:ReducerReturnType) => ({
    callNotificationContent
})

const connector = connect(mapStateToProps,{
})

export type connectorType = ConnectedProps<typeof connector> & propsType

export const CallNotificationContainer = connector(CallNotification)
