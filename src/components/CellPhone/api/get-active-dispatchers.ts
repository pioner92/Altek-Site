import Data from '../../../data.json';
import {createEffect} from "effector";
import {$dispatchersList, setActiveDispatcherList} from "../TransferAndConference/models/models";
import {setIsAvailable} from "../ToggleAvailable/models";
import {getCompanyName} from "../../../utils/getCompanyName";
import {urls} from "./urls/urls";
import {makeRequest} from "../../../api/make-request";

export type dispatcherNumbersType = {
    data: Array<string>
};

declare const window: {
    number: string
}

export const getActiveDispatchers = createEffect(async (): Promise<Array<string> | undefined> => {
    const companyName = getCompanyName()
    try {
        const result: dispatcherNumbersType = await makeRequest(urls.getActiveDispatchers(companyName))
        return result.data
    } catch (e) {
        console.log('Get dispatchers queue Error: ', e)
    }
})

getActiveDispatchers.done.watch(({result}) => {
    if (result) {
        const dispatchers = $dispatchersList.getState()
        const data = []
        for (let item of dispatchers) {
            if (result.includes(item.phone)) {
                data.push(item)
            }
        }
        result.includes(window.number) ? setIsAvailable(true) : setIsAvailable(false)
        setActiveDispatcherList(data)
    }
})
