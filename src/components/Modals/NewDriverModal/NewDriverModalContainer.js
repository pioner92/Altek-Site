import { connect } from 'react-redux';
import NewDriverModal from './NewDriverModal';
import { addNewDriverAction } from '../../../Redux/Actions/AddDataActions/AddDataActions';

const mapStateToProps = () => ({

});

export const NewDriverModalContainer = connect(mapStateToProps, {
    addNewDriverAction,
})(NewDriverModal);
