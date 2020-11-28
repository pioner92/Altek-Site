import {useEffect} from "react";
import {getDispatcherQueue} from "../callQueu/getDispatcherQueue";
import {filterActiveDispatcher} from "../callQueu/filterActiveDispatchers";

export const useGetDispatcherQueue = (dispatchers:any, callback:Function) => {
    return useEffect(()=>{
        const interval = setInterval(() => {
            // @ts-ignore
            const companyName: string = window?.location?.host?.match(/([a-z]+)./)[1];

            getDispatcherQueue(companyName)
                .then((data) => {
                    const newData = filterActiveDispatcher(dispatchers, data);
                    callback(newData);
                });
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    },[dispatchers])
}
