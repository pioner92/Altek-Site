import {createEffect} from "effector";
import {ajax} from "./ajax";
import {setDispatchersList} from "../TransferAndConference/models";
import {dispatchersList} from "../TransferAndConference/models/models";


export const getDispatchers = createEffect(async () => {
    const data = {
        action: 'get_dispatchers',
    };

    return await ajax(data) as Promise<dispatchersList>
})

getDispatchers.done.watch(({result}) => {
    setDispatchersList(result)
})
