import { connect } from 'react-redux';
import SubheaderMenuStatus from './SubheaderMenuStatus';
import { markAsReadAction } from '../../../../Redux/Actions/UpdateDateActions/UpdateDataActions';

const mapStateTuProps = ({ selectedId }) => ({
    selectedId,
});

export const SubheaderMenuStatusContainer = connect(mapStateTuProps, {
    markAsReadAction,
})(SubheaderMenuStatus);
