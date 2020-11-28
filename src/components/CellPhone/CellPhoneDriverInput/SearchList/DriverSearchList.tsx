import React from 'react';
import {phoneDataType} from "../../../../utils/appCall/app/types";
import {setInputValueCellPhone} from "../models";
import {callEvent} from "../../models/models";
import {setIsVisibleDriverList} from "./models";
import {SearchList} from "../../ui/SearchList/SearchList";

type propsType = {
    values: Array<phoneDataType>
}

export const DriverSearchList: React.FC<propsType> = ({values}) => {

    const onSelectDriver = ({name, vehId, number}: { name: string, vehId: string, number: string }) => {
        setInputValueCellPhone(`${name} ${vehId}`)
        callEvent(number)
        setIsVisibleDriverList(false)
    }

    return (
        <SearchList >
            {values.map((el, index) => {
                return (
                    <span className="celphone-searchlist-item" onClick={onSelectDriver.bind(null, {
                        name: el.driver_name,
                        vehId: el.vehicle_id,
                        number: el.driver_number
                    })} key={el.driver_id}>{el.driver_name}</span>
                )
            })}
        </SearchList>
    );
};
