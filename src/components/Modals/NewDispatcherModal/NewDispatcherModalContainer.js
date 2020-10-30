import { connect } from 'react-redux';
import NewDispatcherModal from './NewDispatcherModal';
import { addNewDispatcherAction } from '../../../Redux/Actions/AddDataActions/AddDataActions';

const mapStateToProps = ({}) => ({

});

export const NewDispatcherModalContainer = connect(mapStateToProps, {
    addNewDispatcherAction,
})(NewDispatcherModal);
