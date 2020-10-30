type arrType = {
    driver_id:number
    driver_name:string
    driver_number:string
    vehicle_id: string
}

export const getPhoneNumber = (number:string, arr:Array<arrType>) => {
    return  arr.find((el)=>el.driver_number === number)
};
