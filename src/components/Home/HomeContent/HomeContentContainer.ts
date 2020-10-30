import {selectDriverAction} from "../../../Redux/Actions/OtherActions";
import {connect, ConnectedProps} from 'react-redux';
import HomeContent, {ownPropsType} from './HomeContent';
import {ReducerReturnType} from "../../../Redux/Reducer/Reducer";

const mapStateToProps = ({ selectedId }:ReducerReturnType) => ({
    selectedId,
});

//
const connector = connect(mapStateToProps,{selectDriverAction})

export type connectorType = ConnectedProps<typeof connector> & ownPropsType

export const HomeContentContainer = connect(mapStateToProps,{selectDriverAction})(HomeContent);