import {createEffect} from "effector";
import {ajax} from "./ajax";
import {getCallHistory} from "./get-call-history";

declare const window:{
    curr_user_id:number
}

export const deleteHistoryItems = createEffect(async (ids:Array<number>)=>{
    const data  = {
        action:'delete_post',
        id:ids
    }
    return await ajax(data)
})

deleteHistoryItems.done.watch(()=>{
    getCallHistory({id:window.curr_user_id})
})
