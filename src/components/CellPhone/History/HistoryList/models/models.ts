import {createEvent,createStore} from "effector";
import {callHistoryArray} from "../../models/models";

export const addHistoryItemToArray = createEvent<number>()
export const deleteHistoryItemFromArray = createEvent<number>()
export const selectAllHistoryItems = createEvent<callHistoryArray>()
export const unselectAllHistoryItems = createEvent()

export const $selectedHistoryItems = createStore([] as Array<number>)
    .on(addHistoryItemToArray,(state, payload) => [...state,payload])
    .on(deleteHistoryItemFromArray,(state, payload) => state.filter((el)=>el !== payload))
    .on(selectAllHistoryItems,(state, payload) => payload.map((el)=>el.id))
    .on(unselectAllHistoryItems,(state, payload) => [])

