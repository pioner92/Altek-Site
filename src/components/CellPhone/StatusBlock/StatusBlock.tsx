import React from 'react';
import {useStore} from "effector-react";
import {$callDirection, $driver, $statusNumber} from "./models";
import {$isConnect} from "../models";

export const StatusBlock = () => {

    const isConnect = useStore($isConnect)
    const callDirection = useStore($callDirection)
    const number = useStore($statusNumber)
    const driver = useStore($driver)


    return (
        <div className="cellphone-info-box" id="cellphone-info-box">
            <div className="cellphone-info-box__status">
                {isConnect &&
                <>
                    <span className="incomming">{callDirection} ◉</span>
                    <span className="connected">Connected </span>
                </>
                }
            </div>
            <div className="cellphone-info-box__member">
                <div className="cellphone-info-box__member-avatar">
                    <img src="https://image.freepik.com/free-photo/happy-man-with-newspaper_23-2147694656.jpg" alt=""/>
                </div>
                <div className="cellphone-info-box__member-name">
                    <span>{driver?.driver_name}</span>
                </div>
                <div className="cellphone-info-box__member-phone">
                    <span>{number}</span>
                </div>
                <div className="cellphone-info-box__member-meta">
                    <span>{driver?.vehicle_id}</span>
                </div>
            </div>
        </div>
    );
};
