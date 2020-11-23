import React from 'react';
import {useStore} from "effector-react";
import {$timeCounter} from "./models/models";

export const ConnectedTimerCounter = () => {
    const timer = useStore($timeCounter)

    return (
        <span className="connected">Connected {timer}</span>
    );
};
