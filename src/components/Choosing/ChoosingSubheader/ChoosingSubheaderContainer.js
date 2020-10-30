import { connect } from 'react-redux';
import ChoosingSubheader from './ChoosingSubheader';
import { updateGroupAction } from '../../../Redux/Actions/UpdateDateActions/UpdateDataActions';

const mapStateToProps = ({ inGroup, groupData }) => ({
    inGroup,
    groupData,
});

export const ChoosingSubheaderContainer = connect(mapStateToProps, {
    updateGroupAction,
})(ChoosingSubheader);
