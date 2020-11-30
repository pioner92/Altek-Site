import {createEvent, createStore} from "effector";
import {Connection} from "twilio-client";
import {AppCall} from "../../../utils/appCall/app/appCall";
import {
    callDirection,
    resetStatusData,
    setCallDirection, setIsVisibleDirection, setStatusData,
    setStatusNumber, startTimer, stopTimer,
} from "../StatusBlock/models/models";
import {phoneDataType} from "../../../utils/appCall/app/types";
import {setSelectedBottomButtonIndex} from "../BottomMenu/models";
import {
    onAcceptEvent,
    onDeclineEvent,
    setIsVisibleBackButton,
    showAllCallButtons
} from "../CellPhoneNumpad/CallButtons/models";
import {setIsVisibleKeypad} from "../CellPhoneNumpad/models/models";
import {setIsBlockedDriverList} from "../CellPhoneDriverInput/SearchList/models";
import {driverNumpadClick} from "../CellPhoneNumpad/Numpad/models";
import {setIsNewCallNotification} from "../BottomMenu/models/models";
import {updateNotification} from "../api/update-notification";
import {getUserFromNumber} from "../../../utils/getUserFromNumber";


declare const window : {
    arrPhones:Array<phoneDataType>
    is_admin:boolean
    number:string
}

export const initCellPhone = createEvent<string>()
export const setConnect = createEvent<Connection>()

export const callEvent = createEvent<string>()
export const declineEvent = createEvent()

export const connectHandler = createEvent()
export const incomingHandler = createEvent<string>()
export const disconnectHandler = createEvent()
export const acceptHandler = createEvent<string>()
export const callingHandler = createEvent<string>()
export const missedCallHandler = createEvent<string>()
export const setCallingFrom = createEvent<string>()

export const $isConnect = createStore(false)
    .on(disconnectHandler,() => false)
    .on(connectHandler,() => true)

export const $callApp = createStore(new AppCall({connectHandler,incomingHandler,disconnectHandler,acceptHandler,callingHandler,missedCallHandler}))
    .on(initCellPhone,(state,payload)=>{state.init(payload)})
    .on(callEvent,(state, payload) => state.call(payload))
    .on(declineEvent,(state) => {state.decline()})
    .on(driverNumpadClick,((state, payload) => state.sendDigits(payload)))


export const $callingFrom = createStore('')
    .on(setCallingFrom,(state, payload) => payload)

connectHandler.watch(()=>{
    startTimer()
    setIsVisibleDirection(false)
    setIsBlockedDriverList(true)
})

incomingHandler.watch((number)=>{
    setCallDirection(callDirection.incoming)
    setIsVisibleDirection(true)
    setStatusNumber(number==='000'?'':number)
    setStatusData(getUserFromNumber(number))
    setSelectedBottomButtonIndex(0)
    showAllCallButtons()
    setIsVisibleKeypad(false)
    setIsBlockedDriverList(true)
    setCallingFrom(number)
})

callEvent.watch((payload => {
    setStatusNumber(payload)
    setCallDirection(callDirection.outgoing)
    onAcceptEvent()
}))

callingHandler.watch((payload)=>{
    setSelectedBottomButtonIndex(0)
})

declineEvent.watch(()=>{
    onDeclineEvent()
})

disconnectHandler.watch(()=>{
    resetStatusData()
    stopTimer()
    setIsBlockedDriverList(false)
    onDeclineEvent()
    setIsVisibleBackButton(false)
})

acceptHandler.watch(()=>{

})
missedCallHandler.watch((payload)=>{
    onDeclineEvent()
    setIsNewCallNotification(true)
    updateNotification(payload)
})
