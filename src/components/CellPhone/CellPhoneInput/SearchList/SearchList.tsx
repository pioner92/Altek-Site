import React, {useEffect, useState} from 'react';
import {phoneDataType} from "../../../../utils/appCall/app/callTypes";
import {setInputValueCellPhone} from "../models";
import {callEvent} from "../../models/models";
import {setIsVisibleDriverList} from "./models";

type propsType = {
    values:Array<phoneDataType>
}

export const SearchList:React.FC<propsType> = ({values}) => {

    const onSelectDriver = ({name,vehId,number}:{name:string,vehId:string,number:string})=> {
        setInputValueCellPhone(`${name} ${vehId}`)
        callEvent(number)
        setIsVisibleDriverList(false)
    }

    return (
        <div style={{height:165,
            width:'100%',
            boxShadow:'1px 1px 4px #EFEFEF, -1px -1px 4px #EFEFEF',
            overflowY:'scroll',
            borderRadius:'0px 0px 6px 6px',
            display:'flex',
            flexDirection:'column',
            padding:'10px'
        }}>
            {values.map((el,index)=>{
                return (
                    <span
                        onClick={onSelectDriver.bind(null,{name:el.driver_name,vehId:el.vehicle_id,number:el.driver_number})}
                        key={el.driver_id}>{el.driver_name}
                    </span>
                )
            })}
        </div>
    );
};
