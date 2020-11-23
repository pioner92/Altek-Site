import moment, {Moment} from "moment";

export class TimeCounter {
    private timer: null | ReturnType<typeof setInterval> = null
    private startValue: Moment = moment().startOf('day')

    start(callback: (counter: Moment) => void) {
        this.timer = setInterval(() => {
            this.startValue.add(1, 'second')
            callback(this.startValue)
        }, 1000)
    }

    stop() {
        if (this.timer) {
            clearInterval(this.timer)
        }
        this.startValue = moment().startOf('day')
    }
}
