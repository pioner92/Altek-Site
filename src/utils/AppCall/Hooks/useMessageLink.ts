import {useEffect} from "react";
import {getPhoneNumber} from "../getPhoneNumber";

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


export const useRecordingLink = (socket: any, addCallHistoryLinkAction: any, setId: (text: string) => void, number: string) => {
    useEffect(() => {
        socket.on('message_link', (data: dataType) => {
            console.log(data)
            const {to, from, link, status, direction} = data
            //@ts-ignore
            const id = getPhoneNumber(from, window.arrPhones) || getPhoneNumber(to, window.arrPhones).driver_id
            console.log(id)
            if (numberValidate(number, from, to, direction) && link && id) {
                console.log('Запись')
                addCallHistoryLinkAction({
                    id,
                    link,
                    from,
                    to,
                    status: statusValidate(status)
                });
                setId('');
            }
        });
    }, [])
}
