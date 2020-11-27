import {createEvent,createStore} from "effector";

export const setIsVisibleAcceptButton = createEvent<boolean>()
export const setIsVisibleDeclineButton = createEvent<boolean>()
export const setIsVisibleBackButton = createEvent<boolean>()

export const showAllCallButtons = createEvent()
export const onAcceptEvent = createEvent()
export const onDeclineEvent = createEvent()

export const $isVisibleAcceptButton = createStore(true)
    .on(setIsVisibleAcceptButton,(state, payload) => payload)
    .on(showAllCallButtons,(state, payload) => true)

export const $isVisibleDeclineButton = createStore(false)
    .on(setIsVisibleDeclineButton,(state, payload) => payload)
    .on(showAllCallButtons,(state, payload) => true)

export const $isVisibleBackButton = createStore(false)
    .on(setIsVisibleBackButton,(state, payload) => payload)

onAcceptEvent.watch(()=>{
    setIsVisibleAcceptButton(false)
    setIsVisibleDeclineButton(true)
})

onDeclineEvent.watch(()=>{
    setIsVisibleAcceptButton(true)
    setIsVisibleDeclineButton(false)
})
