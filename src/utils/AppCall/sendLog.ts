type socketType = {
    emit: (action: string, data: any) => void
}

class Timer {
    protected  _duration = 0

    protected  start():void {
        this._duration = Date.now()
    }

    protected  end():void {
        this._duration = Math.round((Date.now() - this._duration) / 1000)
    }

    protected  reset():void {
        this._duration = 0
    }

    protected  get():number {
        return this._duration
    }
}

export class SendLog extends Timer {
     send(socket: socketType, action: string, data: any):void {
        if (action && data) {
            socket.emit(action, data)
        }
        this.resetDuration()
    }

     startCall():void {
        this.start()
    }

     endCall():void {
        this.end()
    }

     resetDuration():void {
        this.reset()
    }

    getDuration():number {
        return this.get()
    }
}





