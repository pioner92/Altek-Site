import {Connection, Device} from "twilio-client";
import {booleanCallback, callback, connectCallback, DeviceType, phoneDataType, stringCallback,} from "./callTypes";
import {CallEvents} from "./callEvents";
import {connectGuard} from "../connectGuard";

declare const window: {
    number: string
    arrPhones: Array<phoneDataType>
    is_admin: boolean
}

export type constructorCallService = {
    setIsConnect?: booleanCallback,
    connectHandler?: callback
    disconnectHandler?: callback
    incomingHandler?: stringCallback
    acceptHandler?: stringCallback
    callingHandler?: callback
    missedCallHandler?: stringCallback
}

export class CallService extends CallEvents {
    //@ts-ignore
    private Device: DeviceType = Device;
    private connectHandler: callback | undefined
    private disconnectHandler: callback | undefined
    private incomingHandler: stringCallback | undefined
    private acceptHandler: stringCallback | undefined
    private callingHandler: callback | undefined
    private missedCallHandler: stringCallback | undefined

    constructor({
                    setIsConnect,
                    connectHandler, disconnectHandler, incomingHandler, acceptHandler, callingHandler, missedCallHandler
                }: constructorCallService) {

        //@ts-ignore
        super({Device: Device, setIsConnect})

        this.connectHandler = connectHandler                            // Connect handler
        this.disconnectHandler = disconnectHandler                      // disconnect handler
        this.incomingHandler = incomingHandler                          // incoming call handler
        this.acceptHandler = acceptHandler                              // accept call handler
        this.callingHandler = callingHandler                            // calling handler
        this.missedCallHandler = missedCallHandler
    }


    private _connectHandler() {
        this.connectHandler && this.connectHandler()
    }

    private _disconnectHandler() {
        this.disconnectHandler && this.disconnectHandler()
    }

    private _acceptHandler(connect: Connection) {
        this.acceptHandler && this.acceptHandler(connect?.parameters?.From)
    }

    private _callingHandler() {
        this.callingHandler && this.callingHandler()
    }

    private _incomingHandler(connect: Connection) {
        this.incomingHandler && this.incomingHandler(connect.parameters.From)
    }

    private _missedCallHandler(connect: Connection) {
        this.missedCallHandler && this.missedCallHandler(connect.parameters.From)
    }

    public sendNumber(number: string) {
        //@ts-ignore
        this.Device.activeConnection()?.sendDigits(number)
        console.log(this.Device.activeConnection())
    }

    public getConnect() {
        return super._getConnect()
    }

    // pressing btn  Decline => HungUp or Reject
    public HungUp() {
        this._disconnectHandler()
        // if in call with => hangUp
        if (connectGuard(this.getConnect(), 'open')) {
            this.Device.disconnectAll()

            // if incoming call => reject
        } else {
            if (connectGuard(this.getConnect(), 'pending')) {
                this.getConnect()?.reject()
                console.log('reject')
            }
        }
    }

    // pressing btn Accept => Accept or Calling
    public Call(cellPhoneInput: string) {
        let params = {
            'phoneNumber': cellPhoneInput,
            'from': window.number
        }
        // if incoming call
        if (this.getConnect() && connectGuard(this.getConnect(), 'pending')) {
            this._connectHandler()
            this.getConnect()?.accept()
            this.getConnect() && this._acceptHandler(this.getConnect()!)
            // if calling to number
        } else if (this.Device.status() === 'ready' || connectGuard(this.getConnect(), 'closed')) {
            this.Device.connect(params)
            this._callingHandler()
            this._connectHandler()
        }
    }


    // token init
    async initToken(number: string) {
        try {
            const response = await fetch(`https://sms.green-node.ru/token/generate/${number}`)          // "url": "https://sms.green-node.ru",
            const {token} = await response.json()

            if (token) {
                this.Device.setup(token, {
                    debug: true,
                    sounds: {
                        incoming: 'https://sms.green-node.ru/incoming_sound'
                    }
                })
            } else console.log('Token is empty')

        } catch (e) {
            console.log('Get token Error')
            console.log(e)
        }
    }

    initEventsListener() {
        // Add Events listener
        super.initEventsHandler(this._disconnectHandler, this._incomingHandler, this._missedCallHandler)
    }
}


