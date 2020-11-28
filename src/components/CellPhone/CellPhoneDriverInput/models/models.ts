import {createEvent, createStore} from "effector";
import {driverNumpadClick} from "../../CellPhoneNumpad/Numpad/models/models";
import {setIsVisibleDriverList} from "../SearchList/models";
import {phoneDataType} from "../../../../utils/appCall/app/types";

declare const window : {
    arrPhones:Array<phoneDataType>
    is_admin:boolean
    number:string
}


export const setInputValueCellPhone = createEvent<string>()
export const clearInputValueCellPhone = createEvent()
export const searchDriverFromCellPhoneInput = createEvent<string>()
export const setDriverList = createEvent<Array<phoneDataType>>()


export const $inputValueCellPhone = createStore('')
    .on(setInputValueCellPhone, (_, payload) => payload)
    .on(driverNumpadClick, (state, payload) => state + payload)
    .on(clearInputValueCellPhone, () => '')

export const $driverList = createStore<Array<phoneDataType>>([])
    .on(setDriverList, (state, payload) => payload)


export const $filteredDriverList = createStore($driverList.getState())
    .on(setDriverList, (state, payload) => payload)
    .on(searchDriverFromCellPhoneInput, (state, payload) =>
        $driverList.getState().filter((el) =>
            window.is_admin && el.driver_number.startsWith(payload) ||
            el.driver_name.toLowerCase().startsWith(payload.toLowerCase()) ||
            el.vehicle_id.toLowerCase().startsWith(payload.toLowerCase())
        )
    )


$inputValueCellPhone.watch((state => {
    setIsVisibleDriverList(!!state)
    searchDriverFromCellPhoneInput(state)
}))
