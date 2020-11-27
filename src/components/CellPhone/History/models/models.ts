import {createEvent,createStore} from "effector";

export type statuses  = 'Missed call' | 'Successful call' |'busy'

export type historyType = {
    author: string
    date: string
    direction: string
    driver_name: string
    duration: string
    from: string
    id: number
    link: string
    number: string
    status: string
    to: string
}

export type callHistoryArray = Array<historyType>

export const setCallHistory = createEvent<callHistoryArray>()

export const $callHistory = createStore([] as callHistoryArray)
    .on(setCallHistory,(state, payload) => payload)


