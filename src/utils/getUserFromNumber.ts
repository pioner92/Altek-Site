import {getDriverFromNumber} from "./appCall/findDriverFromNumber";
import {getDispatcherFromNumber} from "./getDispatcherFromNumber";
import {$dispatchersList} from "../components/CellPhone/TransferAndConference/models";
import {phoneDataType} from "./appCall/app/types";

declare const window: {
    arrPhones: Array<phoneDataType>
    is_admin: boolean
    number: string
}

const dataGenerate = (name: string = '', phone: string = '', id: string = '') => {
    return {
        name,
        phone,
        id
    }
}

export const getUserFromNumber = (number: string) => {
    const driver = getDriverFromNumber(number, window.arrPhones)
    const dispatcher = getDispatcherFromNumber(number, $dispatchersList.getState())
    if (driver) {
        return dataGenerate(driver.driver_name, driver.driver_number, driver.vehicle_id)
    } else if (dispatcher) {
        return dataGenerate(dispatcher.name, dispatcher.phone)
    }
    return dataGenerate()
}
