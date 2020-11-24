import {createEvent,createStore} from "effector";

export const setIsVisibleEditHistoryMenu = createEvent<boolean>()

export const $isVisibleEditHistoryMenu = createStore(false)
    .on(setIsVisibleEditHistoryMenu,(state, payload) => payload)
