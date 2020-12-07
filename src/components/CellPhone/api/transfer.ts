import {createEffect} from "effector";
import {makeRequest} from "../../../api/make-request";
import {urls} from "./urls/urls";

type propsType = {
    companyName: string
    to: string
    from: string
    myExt: string
    callback?: () => void
}

export const transfer = createEffect(async ({companyName, to, from, myExt, callback}: propsType) => {
    try {
        const result = await makeRequest(urls.callToDispatcher(companyName, to, myExt), 'POST', from)
        callback && callback()
        return result
    }
    catch (e) {
        console.log('Transfer ERROR: ',e)
    }
})
