import {phoneDataType} from "./AppCallTypes";

export const getPhoneNumber = (number:string, arr:Array<phoneDataType>) => {
    return  arr.find((el)=>el.driver_number === number)
};
