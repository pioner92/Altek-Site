import {
    ADDMESSAGE,
    ADDTOGROUPDISPATCHERS,
    ADDTOGROUPDRIVERS,
    CLEARDRIVERFROMDRIVERLIST,
    CLEARFILTERSTATUSDRIVERS,
    CLEARMESSAGESLIST,
    CLEARSELECTEDDRIVERS,
    DELETECALLHISTORYITEMFROMLIST,
    DELETEITEMNAME,
    DRIVERFILTER,
    FILTERSTATUSDRIVERS,
    GETCALLHISTORY,
    GETDISPATHCERS,
    GETDRIVERS,
    GETGROUPDATA,
    GETGROUPS,
    GETMESSAGES,
    GETRESPONSIBLE,
    ISNEWCALLNOTIFICATION,
    ISNEWMESSAGE,
    RESETSTATISNEWMESSAGE,
    SELECTDRIVER,
    SELECTEDALLDRIVERS,
    SETISFETCHING,
    WRITETOSTOREACTIVEDISPATCHERS,
    WRITETOSTORECALLNOTIFICATION,
    WRITETOSTOREQUEUESTATUS,
    WRITETOSTORESELECTEDDISPATCHER,
    WRITETOSTORESELECTEDDRIVER
} from "../Constants/Constant";

import {
    groupDataType,
    messagesType,
    messageSubheaderType,
    responseDispatchersDataType,
    responseDriverDataType,
    writeResponsibleDispatcherActionDataType,
    writeToStoreCallHistoryActionDataType,
} from "../Actions/WriteToStoreActions/WriteToStoreActions";
import {ImportTypesData} from "./importTypes";
import {getCallNotificationResponse} from "../Actions/GetDataActions/GetDataActions";


const initialState = {
    drivers: [] as Array<responseDriverDataType>,
    driversPagesCount: [] as string[],
    callHistoryPageCount: [] as Array<number>,
    groups: [],
    dispatchers: [] as Array<responseDispatchersDataType>,
    // dispatchers: Data.dispatchers as Array<responseDispatchersDataType>,
    selectedDriver: {} as responseDriverDataType,
    selectedDispatcher: {} as responseDispatchersDataType,
    activeDispatchers: [] as Array<writeResponsibleDispatcherActionDataType>,
    callHistory: {
        history: [],
        user: [],
        pages_count: 1
    } as writeToStoreCallHistoryActionDataType,
    deleteItemName: '',
    messages: [] as Array<messagesType>,
    messagesSubheader: {id: '', name: '', phone_number: ''} as messageSubheaderType,
    driversList: [] as Array<responseDriverDataType>,
    inputFilterValue: '',
    selectedId: [],
    groupData: {} as groupDataType,
    newMessage: [],
    filterStatusTitle: '',
    isFetching: false,
    isNewMessage: false,
    isSelectedAll: false,
    responsibleData: {} as writeResponsibleDispatcherActionDataType,
    queueStatus: false,
    isNewCallNotification: false,
    callNotificationContent: {content: [], unread_count: 0} as getCallNotificationResponse
}

export type initialStateType = typeof initialState

type actionsType = ImportTypesData


const Reducer = (state: initialStateType = initialState, action: actionsType) => {
    switch (action.type) {
        case  GETDRIVERS :
            let pagesArrDrivers = Array.from(Array(action.pages_count + 1).keys()).slice(1)
            return {
                ...state,
                drivers: [...action.result],
                driversList: [...action.result],
                driversPagesCount: [...pagesArrDrivers]
            }
        // Change Filter input
        case DRIVERFILTER:
            let driverListFilter = [...state.drivers].filter((el) => el?.id?.toString().includes(action?.text?.toString()) ||
                el?.name?.toLowerCase().includes(action.text.toLowerCase()))
            return {...state, driversList: [...driverListFilter], inputFilterValue: action.text}
        // Select all drivers
        case SELECTEDALLDRIVERS:
            let ids: number[] = []
            if (action.isChecked) {
                state.drivers.forEach((el) => ids.push(el.id))
            }
            return {...state, selectedId: [...ids], isSelectedAll: action.isChecked}
        case SELECTDRIVER :
            if (action.isChecked) {
                let selectedId = state.selectedId.filter((el) => el !== action.id)
                return {...state, selectedId: [...selectedId]}
            }
            return {...state, selectedId: [...state.selectedId, action.id]}

        case GETCALLHISTORY :
            let pagesArrCallHistory = Array.from(Array(action.pages_count + 1).keys()).slice(1)
            return {
                ...state,
                callHistory: {history: [...action.history], user: [...action.user], pages_count: action.pages_count},
                callHistoryPageCount: [...pagesArrCallHistory]
            }
        case GETGROUPS:
            return {...state, groups: [...action.groups]}
        case GETDISPATHCERS:
            return {...state, dispatchers: [...action.dispatchers]}
        case GETMESSAGES:
            return {...state, messages: [...action.messages], messagesSubheader: {...action.subheader}}
        case DELETEITEMNAME:
            return {...state, deleteItemName: action.value}
        case CLEARDRIVERFROMDRIVERLIST:
            let driverArr = [...state.drivers].filter((el) => el.id !== action.id)
            return {...state, drivers: [...driverArr]}
        case GETGROUPDATA :
            return {...state, groupData: {...action.groupData}}
        case ADDTOGROUPDRIVERS:
            let index_driver = [...state.groupData.drivers]
                .findIndex((el) => el.id === action.id)
            let drivers = [...state.groupData.drivers]
            let driver = drivers[index_driver]
            driver.in_group = action.status
            drivers.splice(index_driver, 1, driver)
            return {
                ...state,
                groupData: {...state.groupData, drivers: [...drivers], dispatchers: [...state.groupData.dispatchers]}
            }
        case ADDTOGROUPDISPATCHERS:
            let index_dispatcher = [...state.groupData.dispatchers]
                .findIndex((el) => el.id === action.id)
            let dispatchers = [...state.groupData.dispatchers]
            let dispatcher = dispatchers[index_dispatcher]
            dispatcher.in_group = action.status
            dispatchers.splice(index_dispatcher, 1, dispatcher)
            return {
                ...state,
                groupData: {...state.groupData, drivers: [...state.groupData.drivers], dispatchers: [...dispatchers]}
            }
        case ADDMESSAGE:
            return {...state, messages: [...state.messages, {message: action.text, type: true}]}
        case CLEARSELECTEDDRIVERS:
            return {...state, selectedId: [], isSelectedAll: false}
        case SETISFETCHING:
            return {...state, isFetching: action.status}
        case ISNEWMESSAGE:
            return {...state, isNewMessage: action.status, newMessage: [...action.msg]}
        case DELETECALLHISTORYITEMFROMLIST:
            const newCallHistoryList = [...state.callHistory.history]
            const callHistoryFiltered = newCallHistoryList.filter((el) => el.id !== action.id)
            return {
                ...state,
                callHistory: {user: [...state.callHistory.user], history: [...callHistoryFiltered], pages_count: 0}
            }
        case  RESETSTATISNEWMESSAGE:
            return {...state, isNewMessage: false}
        case CLEARMESSAGESLIST:
            return {...state, messages: [], messagesSubheader: {}}
        case FILTERSTATUSDRIVERS:
            return {...state, filterStatusTitle: action.filterStatusTitle}
        case CLEARFILTERSTATUSDRIVERS:
            return {...state, filterStatusTitle: ''}
        case GETRESPONSIBLE:
            return {...state, responsibleData: {...action.data}}
        case WRITETOSTOREACTIVEDISPATCHERS:
            return {...state, activeDispatchers: [...action.data]}
        case WRITETOSTORESELECTEDDISPATCHER:
            return {...state, selectedDispatcher: action.data}
        case WRITETOSTORESELECTEDDRIVER:
            return {...state, selectedDriver: action.data}
        case WRITETOSTOREQUEUESTATUS:
            return {...state, queueStatus: action.status}
        case ISNEWCALLNOTIFICATION:
            return {...state, isNewCallNotification: action.status}
        case WRITETOSTORECALLNOTIFICATION:
            return {...state, callNotificationContent: action.content}
        default:
            return state
    }
}

export type ReducerReturnType = ReturnType<typeof Reducer>

export default Reducer
