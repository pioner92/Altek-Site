import {createEvent,createStore} from "effector";
import {setIsVisibleBackButton} from "../CallButtons/models";

export const setIsVisibleKeypad = createEvent<boolean>()

export const $isVisibleKeypad = createStore(true)
    .on(setIsVisibleKeypad,(state, payload) => payload)

setIsVisibleKeypad.watch(payload => {
    if(!payload){
        setIsVisibleBackButton(false)
    }
})
