import {createEvent,createStore} from "effector";
import {getDriverFromNumber} from "../../../../utils/appCall/findDriverFromNumber";
import {phoneDataType} from "../../../../utils/appCall/app/types";
import {Moment} from "moment";
import {TimeCounter} from "./counter";
import {setInputValueCellPhone} from "../../CellPhoneDriverInput/models";
import {setIsVisibleKeypad} from "../../CellPhoneNumpad/models/models";


export enum callDirection{
    incoming='incoming call',
    outgoing = 'outgoing call'
}

type keys = keyof typeof callDirection
type callDirectionType = typeof callDirection[keys]

type findDriverType = {
    number:string
    arrPhones:Array<phoneDataType>
}
type statusDataType = {
    name:string
    phone:string
    id:string
}

export const setCallDirection = createEvent<callDirectionType>()
export const setStatusNumber = createEvent<string>()
export const resetStatusData = createEvent()
export const setStatusData = createEvent<statusDataType>()
export const startTimer = createEvent()
export const stopTimer = createEvent()
export const setCounter = createEvent<Moment>()
export const setIsVisibleDirection = createEvent<boolean>()


export const $statusData = createStore({name:'',phone:'',id:''} as statusDataType)
    .on(setStatusData,(state, payload) => payload)
    .on(resetStatusData,state => ({name:'',phone:'',id:''}))

export const $statusNumber = createStore('')
    .on(setStatusNumber,(state, payload) => payload)
    .on(resetStatusData,() => '')

export const $callDirection = createStore<callDirectionType>(callDirection.incoming)
    .on(setCallDirection,(state, payload) => payload)

export const $isVisibleDirection = createStore(false)
    .on(setIsVisibleDirection,(state, payload) => payload)

export const $timeCounterService = createStore(new TimeCounter())
    .on(startTimer,(state) => state.start(setCounter))
    .on(stopTimer,(state) => state.stop(setCounter))

export const $timeCounter = createStore<Moment|string>('')
    .on(setCounter,(state, payload) =>payload.format('mm:ss'))


resetStatusData.watch(()=>{
    setIsVisibleDirection(false)
    setInputValueCellPhone('')
    setIsVisibleKeypad(true)
})
