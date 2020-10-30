import React, {useEffect, useState} from 'react';
import {SearchOutlined} from '@ant-design/icons';
//@ts-ignore
import {createGlobalStyle} from "styled-components";

type propsType = {
    data: Array<any>
    placeholder?: string
    width?: string
    height?: string
    border?: boolean
    listBorder?: boolean
    selectedLineColor?: string
    outValueName: string
    callback?:Function
}


export const SearchList = (
    {
        data = [], placeholder, width = '100px', height = '100px', border = false, listBorder = true, selectedLineColor,
        outValueName = 'name',callback
    }: propsType) => {

    const [newData, setNewData] = useState<typeof data>(data)
    const [selectedItem, setSelectedItem] = useState<number>(data[0]?.id)
    const [inputValue, setInputValue] = useState<string>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const arr = data.filter((el) => el[outValueName].toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setNewData(arr)
        setInputValue(e.target.value)
    }
    const onClick = (e: React.MouseEvent<HTMLElement>,phone:string) => {
        const id = e.currentTarget.id
        setSelectedItem(+id)
        const value = data.find((el) => el?.id === +id)
        if (value?.id) {
            setInputValue(value[outValueName])
        }
        if(callback){
            callback(phone)
        }
    }

    useEffect(() => {
        if (!inputValue) {
            setSelectedItem(0)
        }
    }, [inputValue])

    useEffect(() => {
        setNewData(data)
    }, [data])


    const Styles = createGlobalStyle`
    .item-wrapper-active{
      background-color: ${selectedLineColor};
        box-shadow:0px 3px 4px ${'#9d9b9b'};
        color:#fff;
        border-radius:3px;
        display:grid;
        grid-template-columns:30px 12fr;
        align-items:center;
        padding:5px;
    }
    .item-wrapper:hover{
        background-color: ${selectedLineColor};
        cursor:pointer;
        box-shadow:0px 3px 4px ${'#9d9b9b'};
        color:#fff;
        border-radius:3px;
    }
    .item-wrapper{
        display:grid;
        grid-template-columns:30px 12fr;
        align-items:center;
        padding:5px;
    }
    .input-search{
        width: '100%';
        padding:'5px';
        border:0;
        background-color:transparent;
        border-bottom:1px solid #ccc;
    }
    .items-list-wrapper{
        height:${height};
        border:${!listBorder ? '1px solid #ccc' : ''};
        overflow: scroll;
        border:${!listBorder ? '1px solid #ccc' : ''};
        overflow-y: scroll;
        overflow-x:hidden;
        margin-top:10px;
        border-radius:3px
    }
    .items-list-wrapper::-webkit-scrollbar {
        width: 15px;
    }
    .items-list-wrapper::-webkit-scrollbar-track {
        background-color: #ECECEC;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    .items-list-wrapper::-webkit-scrollbar-thumb {
        background: #3897FF;
        border-radius: 10px;
    }
    .items-list-wrapper::-webkit-scrollbar-thumb:hover {
        background: #3897FF;
    }
    .input-search-wrapper{
        display:grid;
        grid-template-columns:12fr 20px;
        align-items:center;
    }
    .component-wrapper{
        background: #FFFFFF;
        box-shadow: 2px 2px 9px 6px rgba(228, 228, 228, 0.5);
        border-radius: 22px;
        margin:10px auto;
        margin-top:45px;
    }
`
    return (
        <div className='component-wrapper' style={{width, border: border ? '1px solid #ccc' : '', padding: '20px'}}>
            <Styles/>
            <div className='input-search-wrapper'>
                {/*{selectedItem && inputValue ?*/}
                {/*    <CheckOutlined/>*/}
                {/*    : <span> </span>*/}
                {/*}*/}
                <input className='input-search' placeholder={placeholder} value={inputValue}
                       style={{width: '100%', padding: '5px'}} onChange={onChange} type='text'/>
                <SearchOutlined/>
            </div>
            <div className='items-list-wrapper'>
                {Array.isArray(newData) && newData?.map((el) => {
                    return (
                        <div key={el?.id.toString()}
                             onClick={(e)=>onClick(e,el.phone)}
                             id={el?.id.toString()}
                             className={selectedItem === el.id ? 'item-wrapper-active' : 'item-wrapper'}>
                            {/*{selectedItem === el?.id ?*/}
                            {/*    <CheckOutlined style={{margin: 0}}/>*/}
                            {/*    : <span/>*/}
                            {/*}*/}
                            <h6 style={{padding: 0, margin: 0}} className='Element' key={el?.id}>{el[outValueName]}</h6>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

