import { connect } from 'react-redux';
import {Fetch} from '../../../Redux/Actions/OtherActions';
import MessengerSubheader from './MessengerSubheader';
import { getMessageAction } from '../../../Redux/Actions/GetDataActions/GetDataActions';
import { deleteItemNameAction } from '../../../Redux/Actions/DeleteDateActions/DeleteDataActions';
import Reducer from "../../../Redux/Reducer/Reducer";
import { writeToStoreSelectedDriver } from "../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";


const mapStateToProps = ({ drivers, messagesSubheader,selectedDriver }) => ({
    drivers,
    selectedDriver,
    subheader: messagesSubheader,
});

export const MessengerSubheaderContainer = connect(mapStateToProps, {
    Fetch,
    getMessageAction,
    deleteItemNameAction,
    writeToStoreSelectedDriver
})(MessengerSubheader);
