import {createEffect} from "effector";
import {ajax} from "./ajax";
import {setCallHistory} from "../History/models";
import {writeToStoreCallHistoryActionDataType} from "../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";

type dataType = {
    action: string
    id:number
    status?: string
}

type propsType = {
    id:number
    status?:string
}

export const getCallHistory = createEffect(async ({id, status}:propsType) => {
    const data: dataType = {
        action: 'get_call_history',
        id
    }
    status && (data.status = status)
    return await ajax(data)
})

getCallHistory.done.watch(({result}) => {
    const {history = []} = result as writeToStoreCallHistoryActionDataType || {}
    setCallHistory(history)
})
