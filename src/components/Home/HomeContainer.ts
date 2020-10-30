import {connect, ConnectedProps} from 'react-redux';
import React from 'react';
import Home, {ownPropsType} from './Home';
import {Fetch}  from '../../Redux/Actions/OtherActions';
import { getDriversAction } from '../../Redux/Actions/GetDataActions/GetDataActions';
import {
    clearFilterStatusDriversAction,
    writeToStoreDriversAction,
} from '../../Redux/Actions/WriteToStoreActions/WriteToStoreActions';
import {ReducerReturnType} from "../../Redux/Reducer/Reducer";


const mapStateToProps= ({
    drivers, driversList, selectedId, isFetching, driversPagesCount, isNewMessage, filterStatusTitle,
}:ReducerReturnType) => ({
    drivers,
    driversList,
    selectedId,
    isFetching,
    driversPagesCount,
    isNewMessage,
    filterStatusTitle,
});
const connector = connect(mapStateToProps,{ getDriversAction, Fetch, clearFilterStatusDriversAction, writeToStoreDriversAction})

export type connectorType = ConnectedProps<typeof connector> & ownPropsType

export const HomeContainer = connect(mapStateToProps,
    {
        getDriversAction,
        Fetch,
        clearFilterStatusDriversAction,
        writeToStoreDriversAction
    })(Home);

