import {createEvent,createStore} from "effector";

export const addFaxNumber = createEvent<string>()
export const deleteFaxNumber = createEvent<string>()

export const $faxNumberList = createStore([] as Array<string>)
    .on(addFaxNumber,(state, payload) => ([...state,payload]))
    .on(deleteFaxNumber,(state, payload) => state.filter((el)=>el!== payload))
