import {createEvent,createStore} from "effector";
import {Connection} from "twilio-client";
import {AppCall} from "../../../utils/appCall/app/appCall";


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
    .on(callingHandler,(state, payload) => true)
    .on(disconnectHandler,(state, payload) => false)


connectHandler.watch(()=>console.log('CONNECT'))
incomingHandler.watch(()=>console.log('INCOMING'))
disconnectHandler.watch(()=>console.log('DISCONNECT'))
acceptHandler.watch(()=>console.log('ACCEPT'))
callingHandler.watch(()=>console.log('CALLING'))
missedCallHandler.watch(()=>console.log('MISSED'))

export const $callApp = createStore(new AppCall({connectHandler,incomingHandler,disconnectHandler,acceptHandler,callingHandler,missedCallHandler}))
    .on(initCellPhone,(state,payload)=>{state.init(payload)})
    .on(callEvent,(state, payload) => {state.call(payload)})
    .on(declineEvent,(state) => {state.decline()})

