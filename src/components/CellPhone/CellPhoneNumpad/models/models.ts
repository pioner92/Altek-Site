import {createEvent,createStore} from "effector";

export const setIsVisibleKeypad = createEvent<boolean>()

export const $isVisibleKeypad = createStore(true)
    .on(setIsVisibleKeypad,(state, payload) => payload)
