import {createEvent,createStore} from "effector";
import {searchDispatcher} from "../../models/models";
import {dispatcherNumpadClick} from "../../../CellPhoneNumpad/Numpad/models";

export const setInputValueDispatcherTransfer = createEvent<string>()
export const setIsVisibleDispatcherList = createEvent<boolean>()

export const $inputValueDispatcherTransfer = createStore('')
    .on(setInputValueDispatcherTransfer,(state, payload) => payload)
    .on(dispatcherNumpadClick,(state, payload) => state+payload)

export const $isVisibleDispatcherList = createStore(false)
    .on(setIsVisibleDispatcherList,(state, payload) => payload)

setInputValueDispatcherTransfer.watch((payload)=>{
    setIsVisibleDispatcherList(true)
    searchDispatcher(payload)
})
