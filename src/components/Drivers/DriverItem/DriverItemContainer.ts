import {connect, ConnectedProps} from "react-redux";
import {DriverItem, ownProps} from "./DriverItem";
import {ReducerReturnType} from "../../../Redux/Reducer/Reducer";
import {writeToStoreSelectedDriver} from "../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";
import {deleteDriverAction} from "../../../Redux/Actions/DeleteDateActions/DeleteDataActions";

const mapStateToProps = ({selectedDriver}: ReducerReturnType) => {
    return {
        selectedDriver
    }
}

const connector = connect(mapStateToProps, {writeToStoreSelectedDriver, deleteDriverAction})
export type connectorType = ConnectedProps<typeof connector> & ownProps

export const DriverItemContainer = connector(DriverItem)
