import { connect } from 'react-redux';
import Header from './Header';
import { Fetch, driverFilterAction, selectDriversAllAction } from '../../Redux/Actions/OtherActions';
import { getDriversAction } from '../../Redux/Actions/GetDataActions/GetDataActions';

const mapStateToProps = ({ inputFilterValue, selectedId, isSelectedAll }) => ({
    inputFilterValue,
    selectedId,
    isSelectedAll,
});

export const HeaderContainer = connect(mapStateToProps, {
    driverFilterAction,
    selectDriversAllAction,
    Fetch,
    getDriversAction,
})(Header);
