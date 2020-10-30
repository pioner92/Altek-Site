import { connect } from 'react-redux';
import HeaderOther from './HeaderOther';
import { getCallHistoryAction, getDriversAction } from '../../Redux/Actions/GetDataActions/GetDataActions';
import { driverFilterAction } from '../../Redux/Actions/OtherActions';

const mapStateToProps = ({ inputFilterValue }) => ({
    inputFilterValue,
});

export const HeaderOtherContainer = connect(mapStateToProps, {
    getDriversAction,
    driverFilterAction,
    getCallHistoryAction,
})(HeaderOther);
