import {connect, ConnectedProps} from "react-redux";
import {EditDispatcherModal} from "./EditDispatcherModal";
import {ReducerReturnType} from "../../../Redux/Reducer/Reducer";
import {updateDispatcherAction} from "../../../Redux/Actions/UpdateDateActions/UpdateDataActions";
import {writeToStoreSelectedDispatcher} from "../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";

const mapStateToProps = ({selectedDispatcher}:ReducerReturnType) => {
    return {
        selectedDispatcher
    }
}

const connector = connect(mapStateToProps,{updateDispatcherAction,writeToStoreSelectedDispatcher})

export type ConnectorType = ConnectedProps<typeof  connector>

export const EditDispatcherModalContainer = connector(EditDispatcherModal)