import {createEvent, createStore} from "effector";

export const setSelectedIndexHistoryButton = createEvent<number>()

export const $selectedIndexHistoryButton = createStore(0)
    .on(setSelectedIndexHistoryButton,(state, payload) => payload)
