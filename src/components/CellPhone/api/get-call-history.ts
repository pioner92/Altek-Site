import {createEffect} from "effector";
import {ajax} from "./ajax";
import {setCallHistory} from "../History/models";
import {writeToStoreCallHistoryActionDataType} from "../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";

type dataType = {
    action: string
    status?: string
}

export const getCallHistory = createEffect(async (status?: string) => {
    const data: dataType = {
        action: 'get_call_history',
    }
    status && (data.status = status)
    return await ajax(data)
})

getCallHistory.done.watch(({result}) => {
    const {history = []} = result as writeToStoreCallHistoryActionDataType || {}
    setCallHistory(history)
})
