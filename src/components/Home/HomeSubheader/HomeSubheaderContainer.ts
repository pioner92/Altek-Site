import { connect } from 'react-redux';
import HomeSubheader from './HomeSubheader';
import { clearSelectedDrivers, setDriverStatusAction } from '../../../Redux/Actions/UpdateDateActions/UpdateDataActions';
import {ReducerReturnType} from "../../../Redux/Reducer/Reducer";
import {writeToStoreQueueStatusAction} from "../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";

const mapStateToProps = ({ selectedId }:ReducerReturnType) => ({
    selectedId,
});

export const HomeSubheaderContainer = connect(mapStateToProps, {
    setDriverStatusAction,
    clearSelectedDrivers,
})(HomeSubheader);
