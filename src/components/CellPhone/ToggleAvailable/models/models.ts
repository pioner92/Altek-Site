import {createEvent, createStore} from "effector";

export const setIsAvailable = createEvent<boolean>()

export const $isAvailable = createStore(false)
    .on(setIsAvailable, (state, payload) => payload)

