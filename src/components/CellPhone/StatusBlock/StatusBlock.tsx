import React from 'react';
import {useStore} from "effector-react";
import {$callDirection, $statusNumber} from "./models";
import {$isConnect} from "../models";
import {$isVisibleDirection, $statusData} from "./models/models";
import {ConnectedTimerCounter} from "./ConnectedTimerCounter";
import {IsAdmin} from "../../Validate/isAdmin";
import {$isVisibleTransfer} from "../TransferAndConference/models";


export const StatusBlock = () => {
    const isConnect = useStore($isConnect)
    const statusNumber = useStore($statusNumber)
    const isVisibleDirection = useStore($isVisibleDirection)
    const isVisibleTransfer = useStore($isVisibleTransfer)
    const callDirection = useStore($callDirection)
    const statusData = useStore($statusData)
    console.log(statusData)

    return (
        <div style={{minHeight: 30}} className="cellphone-info-box" id="cellphone-info-box">
            <div className="cellphone-info-box__status">
                {isVisibleDirection && <span className="incomming">{callDirection} ◉</span>}
                {isConnect && <ConnectedTimerCounter/>}
                {/* <span className="error">Error: text</span>
                <div className="transfer">
                    <span>TransferAndConference in progress ◉</span>
                    <span>Don’t hang up</span>
                </div> */}
            </div>
            <div className="cellphone-info-box__member">
                {!isVisibleTransfer &&
                <>
                    <div className="cellphone-info-box__member-name">
                        <span>{statusData.name}</span>
                    </div>
                    <div className="cellphone-info-box__member-phone">
                        <IsAdmin flag={true}>
                            {statusData.phone ?
                                <span>{statusData.phone}</span>
                                : <span>{statusNumber}</span>
                            }
                        </IsAdmin>
                        <IsAdmin flag={false}>
                            {!statusData.phone &&
                            <span>{statusNumber}</span>
                            }
                        </IsAdmin>
                    </div>
                    <div className="cellphone-info-box__member-meta">
                        <span>{statusData.id}</span>
                    </div>
                </>
                }
            </div>

        </div>
    );
};
