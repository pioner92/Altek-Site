import React from 'react';
import {Input} from "../../ui/Input/Input";
import {SearchList} from "../../ui/SearchList/SearchList";
import {useStore} from "effector-react";
import {$inputValueDispatcherTransfer, setInputValueDispatcherTransfer} from "./models";
import {$filteredDispatchersList, setSelectedDispatcherNumber} from "../models/models";
import {$isVisibleDispatcherList, setIsVisibleDispatcherList} from "./models/models";

export const CellPhoneDispatcherInput = () => {

    const value = useStore($inputValueDispatcherTransfer)
    const dispatchers = useStore($filteredDispatchersList)
    const isVisibleDispatcherList = useStore($isVisibleDispatcherList)

    const onChange = (number:string) => {
        setInputValueDispatcherTransfer(number)
    }

    const clearInput = () => {
        setInputValueDispatcherTransfer('')
    }
    const onSelectDispatcher = (phone:string,name:string) => {
        setSelectedDispatcherNumber(phone)
        setInputValueDispatcherTransfer(`${name}`)
        setIsVisibleDispatcherList(false)
    }


    return (
        <>
            <Input value={value} onChange={onChange} clearInput={clearInput} placeholder={'Type number or name...'}/>
            {isVisibleDispatcherList &&  dispatchers.length>0 &&
            <SearchList >
                {dispatchers.map((el, index) => {
                    return (
                        <span className="celphone-searchlist-item" onClick={onSelectDispatcher.bind(null,el.phone,el.name)} key={el.id}>{el.name}</span>
                    )
                })}
            </SearchList>
            }
        </>
    );
};
