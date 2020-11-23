import {createEvent, createStore} from "effector";
import {Connection} from "twilio-client";
import {AppCall} from "../../../utils/appCall/app/appCall";
import {
    callDirection,
    findDriver,
    resetStatusData,
    setCallDirection,
    setStatusNumber,
} from "../StatusBlock/models/models";
import {$inputValueCellPhone} from "../CellPhoneInput/models";
import {phoneDataType} from "../../../utils/appCall/app/callTypes";


declare const window:{
    arrPhones:Array<phoneDataType>
}

export const initCellPhone = createEvent<string>()
export const initEventListeners = createEvent()
export const setConnect = createEvent<Connection>()

export const callEvent = createEvent()
export const declineEvent = createEvent()

export const connectHandler = createEvent()
export const incomingHandler = createEvent<string>()
export const disconnectHandler = createEvent()
export const acceptHandler = createEvent<string>()
export const callingHandler = createEvent()
export const missedCallHandler = createEvent<string>()

export const $isConnect = createStore(false)
    .on(callingHandler,(state, payload) => true)
    .on(disconnectHandler,(state, payload) => false)

export const $callApp = createStore(new AppCall({connectHandler,incomingHandler,disconnectHandler,acceptHandler,callingHandler,missedCallHandler}))
    .on(initCellPhone,(state,payload)=>{state.init(payload)})
    .on(callEvent,(state, payload) => {state.call($inputValueCellPhone.getState())})
    .on(declineEvent,(state) => {state.decline()})


connectHandler.watch(()=>console.log('CONNECT'))

incomingHandler.watch((number)=>{
    setCallDirection(callDirection.incoming)
    setStatusNumber(number)
    findDriver({number, arrPhones:window.arrPhones})
})

callingHandler.watch(()=>{
    const number = $inputValueCellPhone.getState()
    setCallDirection(callDirection.outgoing)
    setStatusNumber(number)
    findDriver({number, arrPhones:window.arrPhones})
})

disconnectHandler.watch(()=>{
    resetStatusData()
})

acceptHandler.watch(()=>console.log('ACCEPT'))
missedCallHandler.watch(()=>console.log('MISSED'))
