import {useEffect} from "react";
import {filterActiveDispatcher} from "../callQueu/filterActiveDispatchers";
import {getDispatcherQueue} from "../../components/CellPhone/api/get-active-dispatchers";

export const useGetDispatcherQueue = (dispatchers: any, callback: Function) => {
    return useEffect(() => {
        const interval = setInterval(() => {
            // @ts-ignore
            const companyName: string = window?.location?.host?.match(/([a-z]+)./)[1];

            getDispatcherQueue(companyName)
                .then((data) => {
                    if (data) {
                        const newData = filterActiveDispatcher(dispatchers, data);
                        callback(newData);
                    }
                });
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, [dispatchers])
}
