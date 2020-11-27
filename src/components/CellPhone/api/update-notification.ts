import {createEffect} from "effector";
import {ajax} from "./ajax";

type dataType = {
    action: string,
    content?: string
}

export const updateNotification = createEffect(async (content?: string) => {
    try {
        const data:dataType = {
            action: 'update_notifications'
        }
        content && (data.content = content)
        return ajax(data)
    } catch (e) {
        console.log('Update notification Error:', e)
    }
})

updateNotification.done.watch(({result})=>{
    console.log(result)
})
