
// @ts-ignore
import {CLEARSELECTEDDRIVERS} from "../../Constants/Constant";
// @ts-ignore

import {Ajax, Fetch} from '../OtherActions';
// @ts-ignore

import {dataFnGetDrivers, getDispatchersAction, getDriversAction} from "../GetDataActions/GetDataActions";
import {resolve} from "dns";
import {Dispatch} from "redux";
import {writeToStoreSelectedDispatcher} from "../WriteToStoreActions/WriteToStoreActions";



type dataGroup = {
    action:string,
    group_name: string,
    dispatchers:string,
    drivers:string
}

type get_data_drivers = {
    action:string,
    page?:string
}
type dataStatus = {
    action:string,
    ids:string,
    page:string,
    date_sec?:string
    date_day:string,
    date_time:string
}

export type updateDriverData = {
    id:number,
    phone:string,
    name:string,
    veh_id:string
}


export type clearSelectDriversType = {
    type: typeof CLEARSELECTEDDRIVERS
}

export type setResponsibleActionDataType = {
    driver_id:string
    dispatcher_id:string
}

export const clearSelectedDrivers = ():clearSelectDriversType=>{
    return {
        type: CLEARSELECTEDDRIVERS,
    }
}

export const updateGroupAction = (data:dataGroup) => {
    return () => {
        Ajax({data}).then(() => {
        })
    }
}

export const setDriverStatusAction = (data:dataStatus)=>{
    return ()=>{
        Ajax({data})
            .then(()=>{
                let get_data_drivers:get_data_drivers = {
                    action:'get_drivers'
                }
                if(data.page){
                    get_data_drivers['page']=data.page
                }
                // @ts-ignore
                Fetch({action: getDriversAction, get_data_drivers})
            })
    }
}


export const updateDriverAction = ({id,phone,name,veh_id}:updateDriverData) => {
    return (dispatch:Function) => {
        const data = {
            action: 'update_driver',
            id,
            phone,
            name,
            veh_id
        }
        Ajax({data})
            .then((newData:any) => {
                dispatch(getDriversAction({}))
            })
    }
}

export const markAsReadAction = (ids:string[]) => {
    return (dispatch:Function) => {
        const data = {
            action:'mark_read',
            ids
        }
        Ajax({data})
            .then((newData)=>{
                dispatch(getDriversAction({}))
            })
    }
}

export const setResponsibleAction= ({driver_id, dispatcher_id}:setResponsibleActionDataType) =>{
    return (dispatch:Function) => {
        const data = {
            action:'set_responsible',
            driver_id,
            dispatcher_id
        }
        Ajax({data})
            .then((newData)=>console.log(newData))
    }
}

export type updateDispatcherDataType = {
    id:number,
    login:string,
    name:string,
    email:string,
    ext:string
}

export const updateDispatcherAction = ({id,login,name,email,ext}:updateDispatcherDataType) => {
    return (dispatch:Function) => {
        const data = {
            action:'update_dispatcher',
            id,
            login,
            name,
            email,
            ext,
        }
        Ajax<{success:boolean}>({data})
            .then((data) => {
                dispatch(getDispatchersAction())
                dispatch(writeToStoreSelectedDispatcher({id:0,login:'',name:'',phone:'',group:'',email:''}))
            })
    }
}


export type setResponsibleActionType  = typeof setResponsibleAction
export type markAsReadActionType  = typeof markAsReadAction
export type updateDriverActionType  = typeof updateDriverAction
export type setDriverStatusActionType  = typeof setDriverStatusAction
export type updateGroupActionType  = typeof updateGroupAction
