import React, {useRef} from 'react';
import attach_icon from "../../../../static/icons/phone-attach.svg";
import {FileList} from './FileList'
import {addFaxFile} from "./models";

export const AttachFiles = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const attachFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        files !== null && addFaxFile(files[0]);
        inputRef.current && (inputRef.current.value = '');
    }

    return (
        <div className="form-group">
            <label htmlFor="file" className="c-form-control">Attach files</label>
            <label htmlFor="file" className="c-form-control file-attach with-expansion">
                <input ref={inputRef} onChange={attachFile} id="file" type="file" style={{display: 'none'}}/>
                <div className="file-attach-area">
                    <span>My computer</span>
                    <div className="file-attach-button"><img src={attach_icon}/></div>
                </div>
            </label>
            <FileList/>
        </div>
    );
};
