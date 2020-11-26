import {createEvent, createStore} from "effector";


export const setIsVisibleButtonMore = createEvent<boolean>()
export const setIsVisibleActionMenu = createEvent()

export const $isVisibleButtonMore = createStore(true)
    .on(setIsVisibleButtonMore,(state, payload) => payload)

export const $isClosedActionMenu = createStore(false)
    .on(setIsVisibleActionMenu,(state, payload) => !state)
