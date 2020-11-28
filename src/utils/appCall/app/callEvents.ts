import {Connection, Device} from "twilio-client";
import {booleanCallback, callback, connectCallback, DeviceType, phoneDataType} from "./types";


type constructor = {
    Device: Device
    setIsConnect: booleanCallback
}

declare const window: {
    number: string
    arrPhones: Array<phoneDataType>
    is_admin: boolean
}

export class CallEvents {
    private _Device: DeviceType
    private _connect: Connection | null
    private readonly _setIsConnect?: booleanCallback = () => {}
    private __missedCallHandler?: connectCallback
    private __disconnectHandler: callback = () => {}
    private __incomingHandler: connectCallback = () => {}

    constructor({Device, setIsConnect}: constructor) {
        this._Device = Device
        this._setIsConnect = setIsConnect
        this._connect = null
    }

    private _setConnect(connect: Connection) {
        this._connect = connect
    }

    protected _getConnect() {
        return this._connect
    }

    protected initEventsHandler(disconnectHandler: callback, incomingHandler: connectCallback, missingCallHandler: connectCallback) {
        this.__disconnectHandler = disconnectHandler;
        this.__incomingHandler = incomingHandler;
        this.__missedCallHandler = missingCallHandler


        this._Device.on('incoming', (connect: Connection) => {
            this._setConnect(connect);
            this.__incomingHandler(connect);
            console.log('incoming');
        });

        this._Device.on('reject', (connect: Connection) => {
            this._setConnect(connect);
            this.__disconnectHandler();
            console.log('reject');
        });

        this._Device.on('cancel', (connect: Connection) => {
            this._setConnect(connect);
            this.__disconnectHandler();
            this.__missedCallHandler && this.__missedCallHandler(connect)
            connect.disconnect();
            console.log('cancel');
        });

        // Событие - отключение
        this._Device.on('disconnect', (connect: Connection) => {
            this._setConnect(connect);
            this.__disconnectHandler();
            console.log('Disconnect');
        });

        // Событие - в разговоре
        this._Device.on('connect', (connect: Connection) => {
            this._setConnect(connect);
            this._setIsConnect && this._setIsConnect(true);
            console.log('Connect');
        });

        // Приложение запущенно
        this._Device.on('ready', (connect: Connection) => {
            this._setConnect(connect);
            //@ts-ignore
            Device!.audio!.incoming(true)
            this.__disconnectHandler();
            console.log('Ready');
        });

        this._Device.on('error', (error) => {
            console.log('Device Error')
            console.log(error)
        });
        this._Device.on('offline', (connect: Connection) => {
            console.log('OFFLINE')
        })
    }
}
