import {createEvent,createStore} from "effector";

export const setInputValueFaxSendTo = createEvent<string>()

export const $inputValueFaxSendTo = createStore('')
    .on(setInputValueFaxSendTo,(state, payload) => payload)
