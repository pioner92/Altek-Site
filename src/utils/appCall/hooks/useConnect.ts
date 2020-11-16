import {useEffect} from "react";


type propsType = {
    value: boolean
    setCellPhoneStatus: (text: string) => void,
    setStatusData: ({id, name}: { id: string, name: string }) => void
    from: string | undefined
    isAdmin: boolean
    inputValue: string
}

type setStatusConnectHandlerDataType = {
    isAdmin: boolean
    number: string | undefined
}

export const setStatusConnectHandler = ({isAdmin, number}: setStatusConnectHandlerDataType) => {
    if (isAdmin && number) {
        return 'In call with: ' + number
    } else {
        return 'In call with:... '
    }
}

export const useConnect = ({
                               value, setCellPhoneStatus, setStatusData, from,
                               isAdmin, inputValue
                           }: propsType) => {
    useEffect(() => {
        let number = from
        if (value) {
            if (inputValue.length > 2) {
                number = inputValue
            }
            setCellPhoneStatus(setStatusConnectHandler({isAdmin, number}))
        } else {
            setCellPhoneStatus('Ready');
            setStatusData({id: '', name: ''});
        }
    }, [value])
}
