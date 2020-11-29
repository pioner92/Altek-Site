import {createEffect} from "effector";
import {ajax} from "./ajax";
import {setDispatchersList} from "../TransferAndConference/models";
import {dispatchersList, setActiveDispatcherList} from "../TransferAndConference/models/models";
import {getDispatcherQueue} from "./get-active-dispatchers";
import {getCompanyName} from "../../../utils/getCompanyName";


export const getDispatchers = createEffect(async () => {
    try {
        const data = {
            action: 'get_dispatchers',
        };
        return await ajax(data) as Promise<dispatchersList>
    } catch (e) {
        console.log('Get dispatchers Error: ', e)
    }
})

getDispatchers.done.watch(({result}) => {
    if (result) {
        setDispatchersList(result)
    }
})
