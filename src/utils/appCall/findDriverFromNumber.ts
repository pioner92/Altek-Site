import {phoneDataType} from "./app/callTypes";

export const findDriverFromNumber = (number:string, arr:Array<phoneDataType>) => {
    return  arr?.find((el)=>el.driver_number === number)
};
