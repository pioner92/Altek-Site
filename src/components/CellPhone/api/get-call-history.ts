import {createEffect} from "effector";
import {ajax} from "./ajax";
import {setCallHistory} from "../History/models";
import {writeToStoreCallHistoryActionDataType} from "../../../Redux/Actions/WriteToStoreActions/WriteToStoreActions";

export const getCallHistory = createEffect(async ()=>{
    const data = {
        action:'get_call_history',
    }
    return await ajax(data)
})

getCallHistory.done.watch(({result})=>{
    const {history=[]} = result as writeToStoreCallHistoryActionDataType || {}
    setCallHistory(history)
})
