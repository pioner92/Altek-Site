import React, {
    forwardRef, useEffect, useImperativeHandle, useState,
} from 'react';
import socketClient from 'socket.io-client';
import { AppCallFn } from '../../utils/AppCall/AppCall';
import Data from '../../data.json';
import { CellPhoneConnectContainer } from './CellPhoneConnectContainer';

const socket = socketClient(Data.url);

export const connectGuard = (value) => {
    if (value.__proto__.hasOwnProperty('status') && typeof value.status === 'function' && value.status() === 'open') {
        return true;
    }
    return false;
};

const CellPhoneContainer = forwardRef(({ addCallHistoryLinkAction, queueStatus }, ref) => {
    const [cellPhoneInput, setCellPhoneInput] = useState('+');

    const [connect, setConnect] = useState(Function);
    const [btnAcceptColor, setBtnAcceptColor] = useState();
    const [btnDeclineColor, setBtnDeclineColor] = useState();
    const [status, setStatus] = useState('');
    const [statusData, setStatusData] = useState({});
    const [isConnect, setIsConnect] = useState(false);
    const [id, setId] = useState('');
    const [from, setFrom] = useState('');

    const AppCall = new AppCallFn(setStatus, setStatusData, setCellPhoneInput, setBtnAcceptColor,
        setBtnDeclineColor, setConnect, connect, setIsConnect, socket, setFrom);

    const Call = (number) => {
        AppCall.Call(number);
    };

    useImperativeHandle(ref, () => ({
        setInput(data = '+') {
            setCellPhoneInput(data);
        },
        Call(number) {
            Call(number);
        },
        setStatusData(data) {
            setStatusData(data);
        },
        setId(_id) {
            console.log(_id);
            setId(_id);
        },
    }));

    const HungUp = () => {
        setStatusData({
            id: '',
            name: '',
        });
        AppCall.HungUp();
    };

    const transferFn = (number) => {
        console.log(`FROM ${from}`);
        if (connectGuard(connect)) {
            console.log(`Number ${number}`);
            fetch(`${Data.url}/call_to_dispatcher/${number}/${window.number}/agent`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ from }),
            })
                .then((res) => HungUp());
        }
    };

    const onClickHandler = (e) => {
        if (e.target.className === 'number') {
            const number = e.target.dataset.value;
            setCellPhoneInput((prevState) => prevState + number);
        }
    };

    const onChangeHandler = (e) => {
        setCellPhoneInput(e.target.value);
    };

    useEffect(() => {
        setCellPhoneInput('+');
        AppCall.TwilioHandler();
    }, []);

    useEffect(() => {
        if (isConnect) {
            AppCall.StatusHandler('In call with: ');
        } else {
            AppCall.StatusHandler('Ready');
            setStatusData({
                id: '',
                name: '',
            });
        }
    }, [isConnect]);

    useEffect(() => {
        socket.on('message_link', (data) => {
            if (id.toString() && data.link) {
                console.log(id);
                console.log(data.link);
                addCallHistoryLinkAction({
                    id,
                    link: data.link,
                });
                setId('');
            }
        });
    }, [id]);

    useEffect(() => {
        AppCall.initToken();
    }, [queueStatus]);

    return (
        <CellPhoneConnectContainer
            connect={connect}
            transferFn={transferFn}
            onClickHandler={onClickHandler}
            onChangeHandler={onChangeHandler}
            Call={Call}
            HungUp={HungUp}
            status={status}
            btnAcceptColor={btnAcceptColor}
            btnDeclineColor={btnDeclineColor}
            statusData={statusData}
            cellPhoneInput={cellPhoneInput}
        />
    );
});

export default CellPhoneContainer;
