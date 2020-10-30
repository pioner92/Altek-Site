import { connect } from 'react-redux';
import DeleteGroupModal from './DeleteGroupModal';
import { getGroupsAction } from '../../../Redux/Actions/GetDataActions/GetDataActions';
import { deleteGroupAction } from '../../../Redux/Actions/DeleteDateActions/DeleteDataActions';

const mapStateToProps = ({ deleteItemName }) => ({
    deleteItemName,
});

export const DeleteGroupModalContainer = connect(mapStateToProps, {
    getGroupsAction,
    deleteGroupAction,
})(DeleteGroupModal);
