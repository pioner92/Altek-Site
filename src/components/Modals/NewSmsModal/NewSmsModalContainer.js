import { connect } from 'react-redux';
import NewSmsModal from './NewSmsModal';
import {
    selectDriverAction,
    sendFileAction,
    sendSmsAction
} from '../../../Redux/Actions/OtherActions';
import { clearSelectedDrivers } from '../../../Redux/Actions/UpdateDateActions/UpdateDataActions';

const mapStateToProps = ({ selectedId, isSelectedAll }) => ({
    selectedId,
    isSelectedAll,
});

export const NewSmsModalContainer = connect(mapStateToProps, {
    sendSmsAction,
    selectDriverAction,
    clearSelectedDrivers,
    sendFileAction
})(NewSmsModal);
