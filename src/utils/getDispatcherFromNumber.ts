import {dispatchersList} from "../components/CellPhone/TransferAndConference/models/models";

export const getDispatcherFromNumber = (number:string,dispatchers:dispatchersList)=> {
    return dispatchers.find((el)=>el.phone === number)
}
