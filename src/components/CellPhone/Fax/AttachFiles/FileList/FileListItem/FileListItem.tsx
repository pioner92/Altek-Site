import React from 'react';
import doc_icon from "../../../../../../static/icons/phone-doc.svg";
import trash_icon from "../../../../../../static/icons/phone-trash.svg";
import {deleteFaxFile} from "../../models";

type propsType = {
    fileName:string
    icon:string
    size:string
}

export const FileListItem:React.FC<propsType> = ({fileName,icon,size}) => {

    const deleteFile = () => {
        deleteFaxFile(fileName)
    }

    return (
        <div className="cellphone-form-expansion_list__item">
            <div className="cellphone-form-expansion_list__item__name">
                <img src={icon}/>
                <span>{fileName}</span>
                <small>{size}</small>
            </div>
            <img onClick={deleteFile} src={trash_icon}/>
        </div>
    );
};
