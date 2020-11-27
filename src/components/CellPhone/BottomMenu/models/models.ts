import {createEvent,createStore} from "effector";

export const setSelectedBottomButtonIndex = createEvent<number>()
export const setIsNewCallNotification = createEvent<boolean>()

export const $isNewCallNotification = createStore(false)
    .on(setIsNewCallNotification,(state, payload) => payload)

export const $selectedBottomButtonIndex = createStore(0)
    .on(setSelectedBottomButtonIndex,(state, payload) => payload)
