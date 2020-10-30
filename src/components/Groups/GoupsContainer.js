import { connect } from 'react-redux';
import Groups from './Groups';
import { getGroupsAction } from '../../Redux/Actions/GetDataActions/GetDataActions';
import {Fetch}  from '../../Redux/Actions/OtherActions';
import { deleteItemNameAction } from '../../Redux/Actions/DeleteDateActions/DeleteDataActions';

const mapStateToProps = ({ groups, deleteItemName }) => ({
    groups,
    deleteItemName,
});

export const GroupsContainer = connect(mapStateToProps, {
    getGroupsAction, Fetch, deleteItemNameAction,
})(Groups);
