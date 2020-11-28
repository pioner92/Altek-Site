import {createEffect, createEvent, createStore} from "effector";
import Data from "../../../../data.json";
import {phoneDataType} from "../../../../utils/appCall/app/types";

declare const window : {
    arrPhones:Array<phoneDataType>
    is_admin:boolean
    number:string
}

type sendIsAvailableToServerType = {
    phone: string,
    status: boolean,
    companyName: string
}

export const setIsAvailable = createEvent<boolean>()

export const setDispatcherQueue = createEffect(async ({phone, status, companyName}: sendIsAvailableToServerType) => {
    const data = {
        name: companyName,
        number: phone,
        action: 'deleteDispatcher',
    };
    if (status) {
        data.action = 'addDispatcher';
    }
    try {
        const response = await fetch(`${Data.url}/add_delete_dispatcher`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return await response.json()
    } catch (error) {
        console.log('ERROR send is available to server: ' + error)
    }

})

export const getDispatchersQueue = createEffect(async (company_name: string) => {
    try {
        const response = await fetch(`${Data.url}/get_dispatchers/${company_name}`)
        return response.json()
    } catch (error) {
        console.log('ERROR get dispatchers queue ' + error)
    }
})

export const $isAvailable = createStore(false)
    .on(setIsAvailable, (state, payload) => payload)


getDispatchersQueue.done.watch(({result}: { result: { data: Array<string> } }) => {
    const {data} = result
    for (const number of data) {
        if (number === window.number) {
            setIsAvailable(true)
        } else {
            setIsAvailable(false)
        }
    }
})
