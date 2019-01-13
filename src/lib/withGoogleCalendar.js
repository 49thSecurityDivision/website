import React from 'react'
import axios from 'axios'
import moment from 'moment'

import keys from 'lib/keys.json'

const withGoogleCalendar = (Component) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = { calendarOutput: '' }
    }

    componentDidMount() {
        axios.get(encodeURI('https://www.googleapis.com/calendar/v3/calendars/' + keys.calendarId + '/events?maxResults=10&key=' + keys.apiKey))
            .then((response) => {
                let calendarOutput = ''

                if (response.data && response.data.items && response.data.items.length > 0) {
                    calendarOutput =
                        'id  title                           date              time         location         \n' +
                        '____________________________________________________________________________________\n\n'

                    response.data.items.forEach((item, i) => {
                        const cells = [
                            { numCharacters: 4,  value: i },
                            { numCharacters: 32, value: item.summary },
                            { numCharacters: 18, value: moment(item.start.dateTime ? item.start.dateTime : item.start.date).format("MM/DD/YYYY") },
                            { numCharacters: 13, value: (item.start.dateTime ? moment(item.start.dateTime).format("HH:mm") : 'all day') },
                            { numCharacters: 17, value: (item.location ? item.location.substring(0, item.location.indexOf(',')) : '') }
                        ]

                        cells.forEach((cell) => {
                            const value = String(cell.value).substring(0, cell.numCharacters - 1)
                            calendarOutput += value + ' '.repeat(cell.numCharacters - value.length)
                        })

                        calendarOutput += '\n'
                    })
                } else {
                    calendarOutput = 'error: no events found'
                }

                this.setState({ calendarOutput })
            })
            .catch((error) => {
                console.log(error)
                this.setState({ calendarOutput: 'error: something went wrong' })
            })
    }

    render() {
        return <Component {...this.props} calendarOutput={this.state.calendarOutput} />
    }
}

export default withGoogleCalendar