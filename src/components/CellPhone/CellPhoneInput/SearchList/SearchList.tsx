import React from 'react';
import {phoneDataType} from "../../../../utils/appCall/app/callTypes";
import {setInputValueCellPhone} from "../models";
import {callEvent} from "../../models/models";
import {setIsVisibleDriverList} from "./models";

type propsType = {
    values: Array<phoneDataType>
}

export const SearchList: React.FC<propsType> = ({values}) => {

    const onSelectDriver = ({name, vehId, number}: { name: string, vehId: string, number: string }) => {
        setInputValueCellPhone(`${name} ${vehId}`)
        callEvent(number)
        setIsVisibleDriverList(false)
    }

    return (
        <div className="celphone-searchlist celphone-scroll-view">
            {values.map((el, index) => {
                return (
                    <span className="celphone-searchlist-item" onClick={onSelectDriver.bind(null, {
                        name: el.driver_name,
                        vehId: el.vehicle_id,
                        number: el.driver_number
                    })} key={el.driver_id}>{el.driver_name}</span>
                )
            })}
        </div>
    );
};
