import {phoneDataType} from "./app/callTypes";

export const getPhoneNumber = (number:string, arr:Array<phoneDataType>) => {
    return  arr?.find((el)=>el.driver_number === number)
};
