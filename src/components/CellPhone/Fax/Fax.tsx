import React from 'react';
import {SendTo} from "./SendTo/SendTo";
import {CoverPageNotes} from "./CoverPageNotes";
import {AttachFiles} from "./AttachFiles";
import {sendFaxToServer} from "../api/send-fax";
import {useStore} from "effector-react";
import {$faxFileList} from "./AttachFiles/models";
import {$inputValueCoverPageNotes} from "./CoverPageNotes/models";
import {$faxNumberList} from "./SendTo/NumberList/models";


export const Fax = () => {
    const files = useStore($faxFileList)
    const note = useStore($inputValueCoverPageNotes)
    const numbers = useStore($faxNumberList)

    const sendFax = () => {
        if(numbers.length>0 && files.length>0){
            sendFaxToServer({files,note,numbers})
                .then((data)=>console.log(data))
        }
    }


    return (
        <>
            <div className="cellphone-page-body" style={{paddingTop: 10}}>
                <div style={{height: 600}} className="telephony-form celphone-scroll-view">
                    <SendTo/>
                    <CoverPageNotes/>
                    <AttachFiles/>
                    <div className="form-group">
                        <button onClick={sendFax} className="c-form-control large-btn">Send</button>
                    </div>
                </div>
            </div>
        </>
    );
};
