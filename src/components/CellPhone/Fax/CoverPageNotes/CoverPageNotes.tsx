import React from 'react';
import {useStore} from "effector-react";
import {$inputValueCoverPageNotes, setInputValueCoverPageNotes} from "./models";

export const CoverPageNotes = () => {

    const inputValue = useStore($inputValueCoverPageNotes)

    const onChange = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setInputValueCoverPageNotes(e.target.value)
    }

    return (
        <div className="c-form-group">
            <label htmlFor="note" className="c-form-control">Cover page notes</label>
            <textarea onChange={onChange} value={inputValue} id="note" className="c-form-control" placeholder="Type message here (optional)"/>
        </div>
    );
};
