import {Connection, Device} from "twilio-client";
import {booleanCallback, callback, connectCallback, DeviceType, phoneDataType} from "./AppCallTypes";


type constructor = {
    Device: Device
    setConnect: connectCallback
    setIsConnect: booleanCallback
}

declare const window: {
    number: string
    arrPhones: Array<phoneDataType>
    is_admin: boolean
}

export class AppCallEvents {
    private _Device: DeviceType
    private readonly _setConnect: connectCallback
    private readonly _setIsConnect?: booleanCallback
    private __missedCallHandler?: connectCallback
    private __disconnectHandler: callback = () => {
    }
    private __incomingHandler: connectCallback = () => {
    }

    constructor({Device, setConnect, setIsConnect}: constructor) {
        this._Device = Device
        this._setConnect = setConnect
        this._setIsConnect = setIsConnect
    }

    protected initEventsHandler(disconnectHandler: callback, incomingHandler: connectCallback, missingCallHandler: connectCallback) {
        this.__disconnectHandler = disconnectHandler;
        this.__incomingHandler = incomingHandler;
        this.__missedCallHandler = missingCallHandler

        // Входящий звонок
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
