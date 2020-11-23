import React from 'react';
import photo_icon from "../../../../../static/icons/phone-photo.svg";
import doc_icon from "../../../../../static/icons/phone-doc.svg";
import {FileListItem} from "./FileListItem/FileListItem";
import {useStore} from "effector-react";
import {$faxFileList} from "../models";

export const FileList = () => {

    const fileList = useStore($faxFileList)

    const iconValidate = (type:string) => {
        if(type.includes('image')){
            return photo_icon
        }
        else if(type.includes('document')){
            return doc_icon
        }
        return ''
    }

    const sizeSetFormat = (size:number)=>{
        return `${(size/1000000).toFixed(2)} mb`
    }

    if(fileList.length>0){
        return (
            <div className="cellphone-form-expansion">
                <div className="cellphone-form-expansion__list">
                    {fileList.map((el)=>
                        <FileListItem key={el.name+el.size.toString()} icon={iconValidate(el.type)} fileName={el.name} size={sizeSetFormat(el.size)}/>)}
                </div>
            </div>
        );
    }
    else {
        return null
    }
};
