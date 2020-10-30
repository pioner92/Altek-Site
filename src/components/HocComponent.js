import React, {
    useCallback, useEffect, useMemo, useState,
} from 'react';
import { AppCallFn } from '../utils/AppCall/AppCall';

export const HocComponent = (Component) => {
    const Container = () => {
        const [connect, setConnect] = useState({});
        const [btnAcceptColor, setBtnAcceptColor] = useState();
        const [btnDeclineColor, setBtnDeclineColor] = useState();
        const [status, setStatus] = useState('');
        const [statusData, setStatusData] = useState({});
        const [isConnect, setIsConnect] = useState(false);
        const [cellPhoneInput, setCellPhoneInput] = useState('+');

        const AppCall = new AppCallFn(setStatus, setCellPhoneInput, setBtnAcceptColor, setBtnDeclineColor, setConnect,
            connect, setIsConnect);
        AppCall.TwilioHandler();
        const Call = (number) => {
            AppCall.Call(number);
        };

        const HungUp = () => {
            setStatusData({ id: '', name: '' });
            AppCall.HungUp();
        };
        // useEffect(() => {
        //     AppCall.TwilioHandler();
        //     console.log(AppCall);
        // }, []);

        useEffect(() => {
            if (isConnect) {
                AppCall.StatusHandler('In call with: ');
            } else {
                AppCall.StatusHandler('Ready');
                setStatusData({ id: '', name: '' });
            }
        }, [isConnect]);
        return (
            <Component
                Call={Call}
                HungUp={HungUp}
                cellPhoneInput={cellPhoneInput}
                btnAcceptColor={btnAcceptColor}
                btnDeclineColor={btnDeclineColor}
                status={status}
                statusData={statusData}
            />
        );
    };
    return (
        <Container/>
    );
};
