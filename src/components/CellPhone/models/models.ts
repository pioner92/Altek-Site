import {createEvent, createStore} from "effector";
import {Connection} from "twilio-client";
import {AppCall} from "../../../utils/appCall/app/appCall";
import {
    callDirection,
    findDriver,
    resetStatusData,
    setCallDirection, setIsVisibleDirection,
    setStatusNumber, startTimer, stopTimer,
} from "../StatusBlock/models/models";
import {phoneDataType} from "../../../utils/appCall/app/callTypes";


declare const window:{
    arrPhones:Array<phoneDataType>
}

export const initCellPhone = createEvent<string>()
export const initEventListeners = createEvent()
export const setConnect = createEvent<Connection>()

export const callEvent = createEvent<string>()
export const declineEvent = createEvent()

export const connectHandler = createEvent()
export const incomingHandler = createEvent<string>()
export const disconnectHandler = createEvent()
export const acceptHandler = createEvent<string>()
export const callingHandler = createEvent()
export const missedCallHandler = createEvent<string>()

export const $isConnect = createStore(false)
    .on(disconnectHandler,(state, payload) => false)
    .on(connectHandler,(state, payload) => true)

export const $callApp = createStore(new AppCall({connectHandler,incomingHandler,disconnectHandler,acceptHandler,callingHandler,missedCallHandler}))
    .on(initCellPhone,(state,payload)=>{state.init(payload)})
    .on(callEvent,(state, payload) => state.call(payload))
    .on(declineEvent,(state) => {state.decline()})


connectHandler.watch(()=>{
    startTimer()
    setIsVisibleDirection(false)
})

incomingHandler.watch((number)=>{
    setCallDirection(callDirection.incoming)
    setIsVisibleDirection(true)
    setStatusNumber(number)
    findDriver({number, arrPhones:window.arrPhones})
})

callEvent.watch((payload => {
    setStatusNumber(payload)
    setCallDirection(callDirection.outgoing)
    findDriver({number:payload, arrPhones:window.arrPhones})
}))

callingHandler.watch((payload)=>{
    // const number = $inputValueCellPhone.getState()
    // setCallDirection(callDirection.outgoing)
    // setStatusNumber(number)
    // findDriver({number, arrPhones:window.arrPhones})
})

disconnectHandler.watch(()=>{
    resetStatusData()
    stopTimer()
})

acceptHandler.watch(()=>{

})
missedCallHandler.watch(()=>console.log('MISSED'))
