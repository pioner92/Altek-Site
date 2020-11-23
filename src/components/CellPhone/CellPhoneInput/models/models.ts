import {createEvent, createStore} from "effector";
import {numpadNumberClick} from "../../CellPhoneNumpad/Numpad/models/models";
import {setIsVisibleDriverList} from "../SearchList/models";
import {phoneDataType} from "../../../../utils/appCall/app/callTypes";
import {log} from "util";

export const setInputValueCellPhone = createEvent<string>()
export const clearInputValueCellPhone = createEvent()
export const searchDriverFromCellPhoneInput = createEvent<string>()
export const setDriverList = createEvent<Array<phoneDataType>>()


export const $inputValueCellPhone = createStore('')
    .on(setInputValueCellPhone, (_, payload) => payload)
    .on(numpadNumberClick, (state, payload) => state + payload)
    .on(clearInputValueCellPhone, () => '')

export const $driverList = createStore<Array<phoneDataType>>([])
    .on(setDriverList, (state, payload) => payload)


export const $filteredDriverList = createStore($driverList.getState())
    .on(setDriverList, (state, payload) => payload)
    .on(searchDriverFromCellPhoneInput, (state, payload) =>
        $driverList.getState().filter((el) => el.driver_number.startsWith(payload) ||
            el.driver_name.toLowerCase().startsWith(payload.toLowerCase()))
    )


$inputValueCellPhone.watch((state => {
    setIsVisibleDriverList(!!state)
}))


// setInputValueCellPhone.watch((payload => {
//     searchDriverFromCellPhoneInput(payload)
// }))

$inputValueCellPhone.watch((state => {
    searchDriverFromCellPhoneInput(state)
}))
