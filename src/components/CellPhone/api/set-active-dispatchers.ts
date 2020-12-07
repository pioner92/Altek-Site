import {createEffect} from "effector";
import {makeRequest} from "../../../api/make-request";
import {urls} from "./urls/urls";


type sendIsAvailableToServerType = {
    phone: string,
    status: boolean,
    companyName: string
}

export const setActiveDispatchers = createEffect(async ({phone, status, companyName}: sendIsAvailableToServerType) => {
    try {
        const data = {
            name: companyName,
            number: phone,
            action: 'deleteDispatcher',
        };
        status && (data.action = 'addDispatcher')

        return await makeRequest(urls.setDispatchersList(), 'POST', data)
    } catch (error) {
        console.log('ERROR send is available to server: ' + error)
    }
})
