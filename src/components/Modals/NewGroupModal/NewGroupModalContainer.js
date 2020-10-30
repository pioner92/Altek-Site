import { connect } from 'react-redux';
import NewGroupModal from './NewGroupModal';
import { addNewGroupAction } from '../../../Redux/Actions/AddDataActions/AddDataActions';

const mapStateToProps = ({}) => ({

});

export const NewGroupModalContainer = connect(mapStateToProps, {
    addNewGroupAction,
})(NewGroupModal);
