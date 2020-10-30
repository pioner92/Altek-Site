import { connect } from 'react-redux';
import Choosing from './Choosing';
import {
    Fetch,
    addToGroupDispatchersAction,
    addToGroupDriversAction,
} from '../../Redux/Actions/OtherActions';
import { getDispatchersAction, getGroupDataAction } from '../../Redux/Actions/GetDataActions/GetDataActions';
import { updateGroupAction } from '../../Redux/Actions/UpdateDateActions/UpdateDataActions';

const mapStateToProps = ({ groupData }) => ({
    groupData,
});

export const ChoosingContainer = connect(mapStateToProps, {
    getDispatchersAction, Fetch, updateGroupAction, getGroupDataAction, addToGroupDriversAction, addToGroupDispatchersAction,
})(Choosing);
