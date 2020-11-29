import {phoneDataType} from "./app/types";

export const getDriverFromNumber = (number:string, arr:Array<phoneDataType>) => {
    return  arr?.find((el)=>el.driver_number === number)
};
