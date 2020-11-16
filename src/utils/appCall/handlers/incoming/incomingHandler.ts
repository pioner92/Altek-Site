import {getPhoneNumber} from "../../getPhoneNumber";
import {Connection} from "twilio-client";

type arrPhones = {
    driver_id: number
    driver_name: string
    driver_number: string
    vehicle_id: string
}

type propsType = {
    connect: Connection
    setCellPhoneInput: (text: string) => void
    connectHandler: () => void
    setAnimFlag: (status: boolean) => void
    setFrom: (text: string) => void
    setStatusData: ({id, name}: { id: string, name: string }) => void
    setCellPhoneStatus: (text: string) => void
    isAdmin: boolean
    arrPhones: Array<arrPhones>
}

const incomingSetStatus = ({from, isAdmin}: { from: string | undefined, isAdmin?: boolean | undefined }) => {
    if ((isAdmin === undefined || isAdmin) && from) {
        return `Incoming call from: ${from}`
    } else {
        return 'incoming call...'
    }
}

export const incomingHandlerFunction = ({connect, setCellPhoneInput, connectHandler, setAnimFlag, setFrom, setStatusData, setCellPhoneStatus, isAdmin, arrPhones}: propsType) => {
    connectHandler()
    setCellPhoneInput('+')
    setAnimFlag(true)

    if (connect?.parameters?.From) {
        setFrom(connect.parameters.From)
        setCellPhoneStatus(incomingSetStatus({from: connect.parameters.From, isAdmin}))
        if (arrPhones?.length) {
            const driver = getPhoneNumber(connect.parameters.From, arrPhones)         // get driver data
            if (driver) {
                setStatusData({id: driver.vehicle_id, name: driver.driver_name})
            } else {
                setCellPhoneStatus(incomingSetStatus({from: connect.parameters.From}))
            }
        }
    }
}
