import {createEvent,createStore} from "effector";

export const setSelectedButtonIndex = createEvent<number>()

export const $selectedButtonIndex = createStore(0)
    .on(setSelectedButtonIndex,(state, payload) => payload)
