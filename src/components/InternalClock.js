import React, { Component } from 'react'

class InternalClock extends Component {
    constructor(props) {
        super(props)
        this.state = { day: null, hour: null, minute: null, second: null }
    }

    updateClock = (day, now) => {
        this.setState({
            day: day,
            hour: (now.getHours() < 10 ? '0' : '') + now.getHours(),
            minute: (now.getMinutes() < 10 ? '0' : '') + now.getMinutes(),
            second: (now.getSeconds() < 10 ? '0' : '') + now.getSeconds()
        })
    }

    render() {
        const { day, hour, minute, second } = this.state
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

        setInterval(() => {
            const now = new Date()
            this.updateClock(days[now.getDay()], now)
        }, 100)

        return (
            <span className='timestamp'>
                {day + " " + hour + ":" + minute + ":" + second}
            </span>
        )
    }
}

export default InternalClock