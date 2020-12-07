import {useEffect} from "react";
import {getActiveDispatchers} from "../../components/CellPhone/api/get-active-dispatchers";


export const useGetDispatcherQueue = (dispatchers: any, callback: Function) => {
    return useEffect(() => {
        const interval = setInterval(() => {
            // @ts-ignore
            getActiveDispatchers()
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, [dispatchers])
}
