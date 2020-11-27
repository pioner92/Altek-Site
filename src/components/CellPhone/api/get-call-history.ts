import {createEffect} from "effector";
import {ajax} from "./ajax";
import {setCallHistory} from "../History/models";
import {writeToStoreCallHistoryActionDataType} from "../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";

type dataType = {
    action: string
    author:string
    status?: string
}

type propsType = {
    status?:string
}

export const getCallHistory = createEffect(async ({status}:propsType) => {
    const data: dataType = {
        action: 'get_call_history',
        author:'self'
    }
    status && (data.status = status)
    return await ajax(data)
})

getCallHistory.done.watch(({result}) => {
    const {history = []} = result as writeToStoreCallHistoryActionDataType || {}
    setCallHistory(history)
})
