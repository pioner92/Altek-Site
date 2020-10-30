import {SendLog} from './SendLog';

type directionType = 'OUTGOING' | 'INCOMING'
type parametersType = {
    From: string
    To: string
}

type connectType = {
    direction: directionType
    message: { phoneNumber: string }
    parameters: parametersType
}

type returnType = {
    name: directionType
    From: string
    To: string
    status: string
    duration: number
}

export const sendSocketDataValidate = (status: string, connect: connectType,getDuration:Function): returnType | undefined => {
    const direction: directionType = connect.direction;
    if (direction) {
        const duration: number = getDuration();
        console.log(duration)
        let {From, To}: parametersType = connect.parameters;
        if (direction === 'OUTGOING') {
            // @ts-ignore
            From = window.number || '888'
            To = connect.message?.phoneNumber
            if (duration >= 10) {
                return ({
                    name: direction, From, To, status: 'none', duration: 0,
                });
            } else {
                return
            }
        }
        return ({
            name: direction, From, To, status, duration,
        });
    }
};
