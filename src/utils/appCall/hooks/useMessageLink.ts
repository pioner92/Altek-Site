import {useEffect} from "react";
import {getDriverFromNumber} from "../findDriverFromNumber";

type statusType = 'queued' | 'ringing' | 'in-progress' | 'completed' | 'busy' | 'failed' | 'no-answer' | 'canceled'

enum directionEnum {
    incoming = 'incoming',
    outgoing = 'outgoing'
}

type dataType = {
    link: string,
    from: string,
    to: string,
    status: statusType
    direction: directionEnum.incoming | directionEnum.outgoing
    duration: string
}


const statusValidate = (status: statusType) => {
    switch (status) {
        case 'completed':
            return 'Successful call'
        case 'busy' :
            return 'Busy'
        case 'no-answer':
            return 'Missed call'
        default :
            return status
    }
}

const numberValidate = (number: string, from: string, to: string, direction: string) => {
    if (direction === directionEnum.outgoing.toString() && number === from || direction === directionEnum.incoming && number === to) {
        return true
    }
    return false
}


export const useRecordingLink = (socket: any, addCallHistoryLinkAction: any, number: string) => {
    useEffect(() => {
        socket.on('message_link', (data: dataType) => {
            const {to, from, link, status, direction, duration} = data
            //@ts-ignore
            const id = getDriverFromNumber(from, window.arrPhones)?.driver_id || getDriverFromNumber(to, window.arrPhones)?.driver_id
            if (numberValidate(number, from, to, direction) && id) {
                addCallHistoryLinkAction({
                    id,
                    link,
                    from,
                    to,
                    direction,
                    duration: duration.toString(),
                    status: statusValidate(status)
                });
            }
        });
    }, [])
}
