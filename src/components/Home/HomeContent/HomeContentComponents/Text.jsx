import React, {useState} from 'react';
import {Link,withRouter} from "react-router-dom";

const Text = ({message,id,is_fired,is_working,not_working_day,not_working_time,history}) => {

    const onDbClick = ()=>{
        history.push(`/messenger/${id}`)
    }
    const textClassName = window.is_admin ? "text-column item-column col-12 col-lg-4" : "text-column item-column col-12 col-lg-6"

    return (
        // <Link to={`/messenger/${id}`} style={{display: "contents"}}>
            <div onDoubleClick={onDbClick} className={textClassName}>
                <div className="hide-on-medium-and-up header">Text:</div>
                <div className="content">
                    <div  className="text-message" >
                        {is_fired!=='true'&&is_working!=='false'?message?.text:is_fired==='true'?'Fired'
                            :`Not working ${not_working_day} - ${not_working_time}`}
                    </div>

                    <div className="notification">
                        {message?.count>0&&
                        <div className="notification-count">{message?.count}</div>
                        }
                        <div className="notification-timestamp">{message?.last_message_time}</div>
                    </div>
                </div>
            </div>
        // </Link>
    );
};

export default withRouter(Text);