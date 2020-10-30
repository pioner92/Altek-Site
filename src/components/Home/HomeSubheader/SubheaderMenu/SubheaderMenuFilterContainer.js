import { connect } from 'react-redux';
import SubheaderMenuFilter from './SubheaderMenuFilter';
import { getDriversAction } from '../../../../Redux/Actions/GetDataActions/GetDataActions';
import { writeToStoreFilterStatusDriverAction } from '../../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions';

const mapStateToProps = () => ({});

export const SubheaderMenuFilterContainer = connect(mapStateToProps, {
    getDriversAction,
    writeToStoreFilterStatusDriverAction,
})(SubheaderMenuFilter);
