import Data from '../../../data.json';
import {createEffect} from "effector";
import {$dispatchersList, setActiveDispatcherList} from "../TransferAndConference/models/models";

export type dispatcherNumbersType = {
    data: Array<string>
};

export const getDispatcherQueue = createEffect(async (company_name: string): Promise<Array<string> | undefined> => {
    try {
        const response = await fetch(`${Data.url}/get_dispatchers/${company_name}`)
        const data:dispatcherNumbersType = await response.json()
        return data.data
    } catch (e) {
        console.log('Get dispatchers queue Error: ', e)
    }
})

getDispatcherQueue.done.watch(({result}) => {
    if (result) {
        const dispatchers = $dispatchersList.getState()
        const data = []

        for (let item of dispatchers) {
            if (result.includes(item.phone)) {
                data.push(item)
            }
        }
        setActiveDispatcherList(data)
    }
})
