import {connect, ConnectedProps} from "react-redux";
import CellPhoneContainer from "./CellPhoneContainer";
import {ReducerReturnType} from "../../Redux/Reducer/Reducer";
import {getActiveDispatchersAction, getDispatchersAction} from "../../Redux/Actions/GetDataActions/GetDataActions";
import CellPhone, {ownPropsType} from "./CellPhone";
import {writeToStoreActiveDispatchersAction} from "../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";

const mapStateToProps = ({activeDispatchers,dispatchers}:ReducerReturnType) =>{
    return {
        activeDispatchers,
        dispatchers
    }
}

const connector = connect(mapStateToProps,{getActiveDispatchersAction,writeToStoreActiveDispatchersAction})

export type connectorType = ConnectedProps<typeof connector> & ownPropsType

export const CellPhoneConnectContainer = connector(CellPhone)