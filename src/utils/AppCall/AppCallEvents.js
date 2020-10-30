import { SendLog } from './SendLog';

export class AppCallEvents extends SendLog {
    constructor(Device, setConnect, setInput, setStatus, setIsConnect) {
        super();
        this.Device = Device;
        this.setConnect = setConnect;
        this.setInput = setInput;
        this.setStatus = setStatus;
        this.setIsConnect = setIsConnect;
    }

    initEventsHandler(resetStatus, incomingHandler, send, startCall, endCall) {
        this.resetStatus = resetStatus;
        this.incomingHandler = incomingHandler;
        this.sendSocketData = send;
        this.StartCall = startCall;
        this.EndCall = endCall;

        // Входящий звонок
        this.Device.on('incoming', (connect) => {
            this.setConnect(connect);
            this.incomingHandler(connect);
            console.log(connect)
            console.log('incoming');
            console.log(connect.status())
        });

        this.Device.on('reject', (connect) => {
            this.setConnect(connect);
            this.resetStatus();
            console.log('reject');
        });

        this.Device.on('cancel', (connect) => {
            this.setConnect(connect);
            this.resetStatus();
            this.sendSocketData('no-answer', connect);
            connect.disconnect();
            console.log('cancel');
        });
        // Событие - отключение
        this.Device.on('disconnect', (connect) => {
            this.setConnect(connect);
            this.resetStatus();
            this.EndCall();
            this.sendSocketData('answered', connect);
            console.log('Disconnect');
        });

        // Событие - в разговоре
        this.Device.on('connect', (connect) => {
            this.setConnect(connect);
            this.setIsConnect(true);
            this.StartCall();
            console.log('Connect');
            console.log(connect.status())
        });
        // Приложение запущенно
        this.Device.on('ready', (connect) => {
            this.setConnect(connect);
            this.resetStatus();
            console.log('Ready');
            console.log(connect)
        });
        this.Device.on('error', (error) => {
            console.log('Device Error')
            console.log(error)
        });
        this.Device.on('offline', (connect)=>{
            console.log('OFFLINE')
            console.log(connect)
        })
    }
}
