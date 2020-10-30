import { connect } from 'react-redux';
import Drivers from './Drivers';
import {Fetch}  from '../../Redux/Actions/OtherActions';
import { getDriversAction } from '../../Redux/Actions/GetDataActions/GetDataActions';
import { deleteDriverAction } from '../../Redux/Actions/DeleteDateActions/DeleteDataActions';

const mapStateToProps = ({ drivers, driversPagesCount }) => ({
    drivers,
    driversPagesCount,
});

export const DriversContainer = connect(mapStateToProps, {
    getDriversAction, Fetch, deleteDriverAction,
})(Drivers);
