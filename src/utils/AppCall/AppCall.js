import {Connection, Device} from "twilio-client";
import {getPhoneNumber} from "./getPhoneNumber";
import {AppCallEvents} from "./AppCallEvents";
import {sendSocketDataValidate} from "./sendSocketDataValidate";
import Data from '../../data.json'


export class AppCallFn extends AppCallEvents{
    static _flag = false

    constructor(setStatus, setStatusData, setCellPhoneInput, setBtnAcceptColor,
                setBtnDeclineColor, setConnect, connect, setIsConnect, socket,setFrom) {

        super(Device, setConnect, setCellPhoneInput, setStatus, setIsConnect)
        this.setStatus = setStatus
        this.setStatusData = setStatusData
        this.setCellPhoneInput = setCellPhoneInput
        this.setBtnAcceptColor = setBtnAcceptColor
        this.setBtnDeclineColor = setBtnDeclineColor
        this.setConnect = setConnect
        this.connect = connect
        this.setIsConnect = setIsConnect
        this.btn_accept_active = '#7EDC5D'
        this.btn_accept_disabled = '#AEDE9E'
        this.btn_decline_active = '#EC5454'
        this.btn_decline_disabled = '#EF7575'
        this.socket = socket
        this.setFrom = setFrom
    }

    // set button color
    initBtnColors(acceptActive, acceptDisabled, declineActive, declineDisabled) {
        this.btn_accept_active = acceptActive
        this.btn_accept_disabled = acceptDisabled
        this.btn_decline_active = declineActive
        this.btn_decline_disabled = declineDisabled
    }

    // Set status
    StatusHandler(status) {
        this.setStatus(status)
    }

    //Reset status and number
    ResetStatus() {
        this.setStatus('Ready')
        this.setCellPhoneInput('+')
        this.setStatusData({
            id: '',
            name: ''
        })
        this.btnColorsDisconnect()
        AppCallFn.setFlag(false)
    }

    // button colors connect
    btnColorsConnect() {
        this.setBtnAcceptColor(this.btn_accept_disabled)
        this.setBtnDeclineColor(this.btn_decline_active)
    }

    // button colors disconnect
    btnColorsDisconnect() {
        this.setBtnAcceptColor(this.btn_accept_active)
        this.setBtnDeclineColor(this.btn_decline_disabled)
    }

    static setFlag(status) {
        AppCallFn._flag = status
    }

    buttonColorAnimate() {
        let timer = setInterval(() => {
            if (AppCallFn._flag) {
                this.setBtnAcceptColor((prevState) => {
                    if (prevState === '#AEDE9E') {
                        return '#30f354'
                    } else {
                        return '#AEDE9E'
                    }
                })
            } else {
                clearInterval(timer)
                this.setBtnAcceptColor(this.btn_accept_active)
            }
        }, 600)
    }


    // send  Hand Up
    HungUp() {
        this.ResetStatus()
        if (this.connect?.status() === 'open') {
            this.Device.disconnectAll()

        } else {
            if (this.connect?.status() === 'pending') {
                this.sendSocket('busy', this.connect)
                this.connect?.reject()
                console.log('reject')
            }
        }
    }

    // send Call
    Call(cellPhoneInput) {
        AppCallFn.setFlag(false)
        let params = {
            'phoneNumber': cellPhoneInput
        }
        if (this.connect.status() === 'pending') {
            this.btnColorsConnect()
            this.connect.accept()

            if(window.is_admin){
                this.StatusHandler('In call with: ' +this.connect.parameters.From)
            }
            else{
                this.StatusHandler('In call with:... ')
            }
        } else if (this.connect.status() === 'ready' || this.connect.status() === 'closed') {
            Device.connect(params)
            this.btnColorsConnect()
            this.StatusHandler('Calling...')
        }
    }

    incomingHandler(connect) {
        this.setBtnDeclineColor(this.btn_decline_active)
        this.setCellPhoneInput('+')
        AppCallFn.setFlag(true)
        this.buttonColorAnimate()
        console.log(connect.parameters.From)
        this.setFrom(connect.parameters.From)
        if (window.is_admin) {
            this.setStatus(`Incoming call from: ${connect.parameters.From}`)
        } else {
            this.setStatus('Incoming call...')
        }
        if (window.arrPhones?.length) {
            const driver = getPhoneNumber(connect.parameters.From, window.arrPhones)
            if (driver) {
                this.setStatusData({id: driver.vehicle_id, name: driver.driver_name})
            } else {
                this.setStatus(`Incoming call from: ${connect.parameters.From}`)
            }
        }
    }

    sendSocket(status, connect) {
        const data = sendSocketDataValidate(status, connect, super.getDuration.bind(this))
        if (data) {
            super.send(this.socket, 'status', data)
        }
    }


    // Генерация токена
    async initToken() {
        const response = await fetch(`${Data.url}/token/generate/${window.number}`)

        // const response = await fetch(`${Data.url}/token/generate/888`)
            .catch((er)=>console.log(er))
        const data = await response.json()
        if(data.token){
            console.log(data.token)
            Device.setup(data.token,{
                debug:true,
                sounds:{
                    incoming: 'https://sms.green-node.ru/incoming_sound'
                }
            })
        }
        else {
            console.log('Token error')
        }
    }

    TwilioHandler() {
        // this.initToken()
        //     .then(()=>{
                    // Инициализация прослушики событий
                    super.initEventsHandler(this.ResetStatus, this.incomingHandler, this.sendSocket, super.startCall, super.endCall)
            // })
    }
}
