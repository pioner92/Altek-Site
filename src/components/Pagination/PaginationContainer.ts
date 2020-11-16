import {connect, ConnectedProps} from "react-redux";
import {ReducerReturnType} from "../../Redux/Reducer/Reducer";
import {PaginationNew} from "./PaginationNew";

const mapStateToProps = ({callHistory}:ReducerReturnType) => ({
    callHistory
})

const connector = connect(mapStateToProps,{

})

export type connectorType = ConnectedProps<typeof connector>

export const PaginationContainer = connector(PaginationNew)
