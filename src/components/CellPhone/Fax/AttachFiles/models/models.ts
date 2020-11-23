import {createEvent,createStore} from "effector";

export const addFaxFile = createEvent<any>()
export const deleteFaxFile = createEvent<any>()

export const $faxFileList = createStore([] as Array<HTMLInputElement>)
    .on(addFaxFile,(state, payload) => [...state,payload])
    .on(deleteFaxFile,(state, payload) => state.filter((el)=>el.name !== payload))
