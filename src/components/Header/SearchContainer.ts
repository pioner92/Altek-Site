import {connect, ConnectedProps} from 'react-redux';
import Search, {ownerType} from './Search';
import { driverFilterAction } from '../../Redux/Actions/OtherActions';
import {searchContainerType} from "./HeaderOther";

const mapStateToProps = () => ({});

const connector = connect(mapStateToProps,{
    driverFilterAction,
})

export type connectorType = ConnectedProps<typeof connector> & searchContainerType

export const SearchConnectContainer = connector(Search);
