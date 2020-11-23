import React from 'react';
import attach_icon from "../../../../static/icons/phone-attach.svg";
import {FileList} from './FileList'
import {addFaxFile} from "./models";

export const AttachFiles = () => {

        const attachFile = (e: React.ChangeEvent<HTMLInputElement>) => {
            const files = e.target.files
            if(files !== null){
                const {size, name, type} = files[0]
                console.log(size)
                console.log(name)
                console.log(type)
                addFaxFile(files[0])
            }
        }

        return (
            <div className="form-group">
                <label htmlFor="file" className="c-form-control">Attach files</label>
                <label htmlFor="file" className="c-form-control file-attach with-expansion">
                    <input onChange={attachFile} id="file" type="file" style={{display: 'none'}}/>
                    <div className="file-attach-area">
                        <span>My computer</span>
                        <div className="file-attach-button"><img src={attach_icon}/></div>
                    </div>
                </label>
                <FileList/>
            </div>
        );
    }
;
