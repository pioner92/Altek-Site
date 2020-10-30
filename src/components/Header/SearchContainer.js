import { connect } from 'react-redux';
import Search from './Search';
import { driverFilterAction } from '../../Redux/Actions/OtherActions';

const mapStateToProps = () => ({

});

export const SearchConnectContainer = connect(mapStateToProps, {
    driverFilterAction,
})(Search);
