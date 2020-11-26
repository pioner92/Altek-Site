import {CallService, constructorCallService} from "./callService";
import {connectGuard} from "../connectGuard";

export class AppCall {
    callService: CallService

    constructor(
        {setIsConnect,connectHandler,disconnectHandler,incomingHandler,
            acceptHandler,callingHandler,missedCallHandler}: constructorCallService) {

        this.callService = new CallService({setIsConnect,connectHandler,disconnectHandler,incomingHandler,
            acceptHandler,callingHandler,missedCallHandler})
    }
    init(myNumber: string) {
        this.callService.initToken(myNumber)
        this.callService.initEventsListener()
    }

    call(phone: string) {
        this.callService.Call(phone)
    }

    decline() {
        this.callService.HungUp()
    }

    sendDigits(number:string){
        if(connectGuard(this.callService.getConnect(),'open')){
            this.callService.getConnect()?.sendDigits(number)
        }
    }
}
