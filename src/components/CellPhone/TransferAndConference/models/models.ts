import {createEvent,createStore} from "effector";
import {$inputValueDispatcherTransfer} from "../CellPhoneDispatcherInput/models";
import {getActiveDispatchers} from "../../api/get-active-dispatchers";
import {getCompanyName} from "../../../../utils/getCompanyName";

type dispatchersItem = {
    email: string
    group: string
    id: number
    login: string
    name: string
    phone: string
}

export type dispatchersList = Array<dispatchersItem>

export const setIsVisibleTransfer = createEvent<boolean>()
export const setIsVisibleConference = createEvent<boolean>()
export const setDispatchersList = createEvent<dispatchersList>()
export const setActiveDispatcherList = createEvent<dispatchersList>()
export const setFilteredDispatchersList = createEvent<dispatchersList>()
export const searchDispatcher = createEvent<string>()
export const setSelectedDispatcherNumber = createEvent<string>()


export const $isVisibleTransfer = createStore(false)
    .on(setIsVisibleTransfer,(state, payload) => payload)

export const $isVisibleConference = createStore(false)
    .on(setIsVisibleConference,(state, payload) => payload)

export const $dispatchersList = createStore([] as dispatchersList)
    .on(setDispatchersList,(state, payload) => payload)

export const $activeDispatcherList = createStore([] as dispatchersList)
    .on(setActiveDispatcherList,(state, payload) => payload)

export const $filteredDispatchersList = createStore([] as dispatchersList)
    .on(setFilteredDispatchersList,(state, payload) => payload)
    .on(searchDispatcher,(state, payload) => {
        return $activeDispatcherList.getState().filter((el)=>
            el.phone.startsWith(payload)
            || el.name.toLowerCase().startsWith(payload.toLowerCase())
        )
    })

export const $selectedDispatcherNumber = createStore('')
    .on(setSelectedDispatcherNumber,(state, payload) => payload)



setDispatchersList.watch(payload => {
    setFilteredDispatchersList(payload)
    getActiveDispatchers()
})

$inputValueDispatcherTransfer.watch(state => {
    searchDispatcher(state)
})
