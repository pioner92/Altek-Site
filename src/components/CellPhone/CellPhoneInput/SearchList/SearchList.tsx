import React, {useEffect, useState} from 'react';
import {phoneDataType} from "../../../../utils/appCall/app/callTypes";
import {setInputValueCellPhone} from "../models";

type propsType = {
    values:Array<phoneDataType>
}

export const SearchList:React.FC<propsType> = ({values}) => {

    const onSelectDriver = (number:string)=> {
        setInputValueCellPhone(number)
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
                    <span onClick={onSelectDriver.bind(null,el.driver_number)} key={el.driver_id}>{el.driver_name}</span>
                )
            })}
        </div>
    );
};
