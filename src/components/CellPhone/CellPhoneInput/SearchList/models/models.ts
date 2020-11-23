import {createEvent,createStore} from "effector";

export const setIsVisibleDriverList = createEvent<boolean>()

export const $isVisibleDriverList = createStore(false)
    .on(setIsVisibleDriverList,(state, payload) => payload)
