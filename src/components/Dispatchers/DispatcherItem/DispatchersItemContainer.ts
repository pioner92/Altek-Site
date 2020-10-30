import {connect, ConnectedProps} from "react-redux";
import DispatcherItem from "./DispatcherItem";
import {ReducerReturnType} from "../../../Redux/Reducer/Reducer";
import {writeToStoreSelectedDispatcher} from "../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";

const mapStateToProps = ({}:ReducerReturnType) => {
    return {

    }
}

const connector = connect(mapStateToProps,{writeToStoreSelectedDispatcher})

export type connectorType = ConnectedProps<typeof connector>

export const DispatcherItemContainer = connector(DispatcherItem)