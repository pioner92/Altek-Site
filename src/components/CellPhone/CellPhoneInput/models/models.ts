import {createEvent,createStore} from "effector";
import {numpadNumberClick} from "../../CellPhoneNumpad/Numpad/models/models";

export const setInputValueCellPhone = createEvent<string>()

export const $inputValueCellPhone = createStore('')
    .on(setInputValueCellPhone,(_,payload)=>payload)
    .on(numpadNumberClick,(state, payload) => state+payload)

