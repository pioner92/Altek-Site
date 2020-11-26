import {createEffect} from "effector";
import {ajax} from "./ajax";
import {getCallHistory} from "./get-call-history";

export const deleteHistoryItems = createEffect(async (ids:Array<number>)=>{
    const data  = {
        action:'delete_post',
        id:ids
    }
    return await ajax(data)
})

deleteHistoryItems.done.watch(()=>{
    getCallHistory()
})
