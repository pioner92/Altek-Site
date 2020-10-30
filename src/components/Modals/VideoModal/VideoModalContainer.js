import { connect } from 'react-redux';
import VideoModal from './VideoModal';
import { addNewDriverAction } from '../../../Redux/Actions/AddDataActions/AddDataActions';

const mapStateToProps = () => ({

});

export const VideoModalContainer = connect(mapStateToProps, {
    addNewDriverAction,
})(VideoModal);
