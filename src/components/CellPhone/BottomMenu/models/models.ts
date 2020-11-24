import {createEvent,createStore} from "effector";

export const setSelectedBottomButtonIndex = createEvent<number>()

export const $selectedBottomButtonIndex = createStore(0)
    .on(setSelectedBottomButtonIndex,(state, payload) => payload)
