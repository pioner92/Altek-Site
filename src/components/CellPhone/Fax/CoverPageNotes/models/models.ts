import {createEvent,createStore} from "effector";

export const setInputValueCoverPageNotes = createEvent<string>()

export const $inputValueCoverPageNotes = createStore('')
    .on(setInputValueCoverPageNotes,(state, payload) => payload)
