import {connect, ConnectedProps} from "react-redux";
import {ReducerReturnType} from "../../Redux/Reducer/Reducer";
import {getActiveDispatchersAction} from "../../Redux/Actions/GetDataActions/GetDataActions";
import  {ownPropsType, RightBlock} from "./RightBlock";
import {
    writeToStoreActiveDispatchersAction,
} from "../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";

const mapStateToProps = ({activeDispatchers,dispatchers}:ReducerReturnType) =>{
    return {
        activeDispatchers,
        dispatchers
    }
}

const connector = connect(mapStateToProps,{
    getActiveDispatchersAction,writeToStoreActiveDispatchersAction,
})

export type connectorType = ConnectedProps<typeof connector> & ownPropsType

export const RightBlockContentContainer = connector(RightBlock)
