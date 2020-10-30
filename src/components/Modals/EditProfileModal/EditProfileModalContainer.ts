import {connect, ConnectedProps} from 'react-redux';
import EditProfileModal, {ownProps} from './EditProfileModal';
import { setResponsibleAction, updateDriverAction } from '../../../Redux/Actions/UpdateDateActions/UpdateDataActions';
import { deleteDriverAction, deleteItemNameAction } from '../../../Redux/Actions/DeleteDateActions/DeleteDataActions';
import { getDispatchersAction, getResponsibleAction } from '../../../Redux/Actions/GetDataActions/GetDataActions';
import {ReducerReturnType} from "../../../Redux/Reducer/Reducer";

const mapStateToProps = ({dispatchers,responsibleData,selectedDriver,messagesSubheader }:ReducerReturnType) =>
    ({  dispatchers,responsibleData,selectedDriver,messagesSubheader });

const connector = connect(mapStateToProps,{    updateDriverAction,
    deleteDriverAction,
    getDispatchersAction,
    getResponsibleAction,
    setResponsibleAction,
})

export type connectorType = ConnectedProps<typeof connector> & ownProps

export const EditProfileModalContainer = connector(EditProfileModal);
