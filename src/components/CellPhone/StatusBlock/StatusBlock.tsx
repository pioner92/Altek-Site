import React from 'react';
import {useStore} from "effector-react";
import {$callDirection, $driver} from "./models";
import {$isConnect} from "../models";
import {$isVisibleDirection} from "./models/models";
import {ConnectedTimerCounter} from "./ConnectedTimerCounter";
import {IsAdmin} from "../../Validate/isAdmin";
import {phoneDataType} from "../../../utils/appCall/app/callTypes";

declare const window : {
    arrPhones:Array<phoneDataType>
    is_admin:boolean
    number:string
}

export const StatusBlock = () => {
    const isConnect = useStore($isConnect)
    const isVisibleDirection = useStore($isVisibleDirection)
    const callDirection = useStore($callDirection)
    const driver = useStore($driver)

    return (
        <div style={{minHeight: 30}} className="cellphone-info-box" id="cellphone-info-box">
            <div className="cellphone-info-box__status">
                {isVisibleDirection && <span className="incomming">{callDirection} ◉</span>}
                {isConnect && <ConnectedTimerCounter/>}
            </div>
            <div className="cellphone-info-box__member">
                {/*<div className="cellphone-info-box__member-avatar">*/}
                {/*    <img src="https://image.freepik.com/free-photo/happy-man-with-newspaper_23-2147694656.jpg" alt=""/>*/}
                {/*</div>*/}
                <div className="cellphone-info-box__member-name">
                    <span>{driver?.driver_name}</span>
                </div>
                <div className="cellphone-info-box__member-phone">
                    <IsAdmin flag={true}>
                        <span>{driver?.driver_number}</span>
                    </IsAdmin>

                </div>
                <div className="cellphone-info-box__member-meta">
                    <span>{driver?.vehicle_id}</span>
                </div>
            </div>
        </div>
    );
};
