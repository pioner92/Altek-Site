import {createEffect} from "effector";
import {ajax} from "./ajax";
import {setIsNewCallNotification} from "../BottomMenu/models/models";

export const getNewNotification = createEffect(async () => {
    try {
        const data = {
            action: 'get_notifications'
        }
        return await ajax(data)

    } catch (er) {
        console.log("Get new notification Error:", er)
    }
})

getNewNotification.done.watch(({result})=>{
    const {unread_count = []} = result as {unread_count:Array<string>} || {}
    if(unread_count.length>0){
        setIsNewCallNotification(true)
    }
    console.log(result)
})
