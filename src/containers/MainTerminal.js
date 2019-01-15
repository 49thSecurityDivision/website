import React, { Component } from 'react'

import { command_output, help_output, error_output } from 'output'

import withGoogleCalendar from 'lib/withGoogleCalendar'

import Terminal from 'components/Terminal'
import PromptString from 'components/PromptString'

class MainTerminal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numLines: 1,
            history: [],
            historySearchIndex: -1,
            lines: [{
                id: 0,
                isActive: true,
                command: null,
                output: null
            }],
            isLoading: true
        }
    }

    componentDidMount() {
        this.refs.activeLine.focus()
    }

    handleTerminalClick = (event) => {
        // this check ensures the user can still select output text within terminal without losing focus
        if (event.target.tagName.toUpperCase() !== 'PRE') {
            this.refs.activeLine.focus()
        }
    }

    handleKeyDown = (event) => {
        if (event.which === 38 || event.which === 40) { // history search
            let { history, historySearchIndex } = this.state

            switch (event.which) {
                case 38: // up arrow
                    if (historySearchIndex < history.length - 1) { historySearchIndex++ }
                    break
                case 40: // down arrow
                    if (historySearchIndex >= 0) { historySearchIndex-- }
                    break
                default:
            }

            let value = ''
            if (historySearchIndex >= 0) { value = history[historySearchIndex] }
            this.refs.activeLine.value = value
            this.setState({ historySearchIndex })
        }
    }

    handleKeyPress = (event) => {
        if (event.which === 13) { // enter key
            // reset history search index
            this.setState({ historySearchIndex: -1 })

            // handle command input
            const { value, nextElementSibling } = event.target
            let output = ''

            switch (value) {
                case 'about':
                    output = command_output['about']
                    nextElementSibling.style.textAlign = 'justify'
                    break
                case 'about -v':
                case 'about --verbose':
                    output = command_output['about_verbose']
                    nextElementSibling.style.textAlign = 'justify'
                    break
                case 'leaders':
                    output = command_output['leaders']
                    nextElementSibling.style.whiteSpace = 'pre'
                    break
                case 'calendar':
                    // output = command_output['calendar']
                    output = this.props.calendarOutput
                    nextElementSibling.style.whiteSpace = 'pre'
                    break
                case 'join':
                    output = command_output['join']
                    break
                case 'help':
                    help_output.forEach((command) => output += command.output + '\n')
                    break
                default:
                    const firstValue = (value.indexOf(' ') < 0 ? value : value.substring(0, value.indexOf(' ')))
                    output = firstValue + error_output
            }

            const history = this.state.history
            history.unshift(value)

            let lines = []
            let nextIndex = this.state.numLines

            if (value !== 'clear') {
                lines = this.state.lines
                lines[lines.length - 1].command = value
                lines[lines.length - 1].output = output
            }

            lines.push({ id: nextIndex, isActive: true, output: null })

            this.setState({ numLines: nextIndex + 1, history, lines })
        }
    }

    render() {
        return (
            <Terminal isVisible={this.props.isVisible} onClick={this.handleTerminalClick}>
                <div className='header'>
                    <span className='wd'>home</span>
                </div>

                <div className='line'>
                    <PromptString number={1} /> Welcome to the 49th Security Division at UNC Charlotte.
                </div>

                <div className='line'>
                    <PromptString number={1} /> Type `about` to learn more or `help` to view all available commands.
                </div>

                <div className='line'>&nbsp;</div>

                {
                    this.state.lines.map((line) => {
                        return (
                            <div key={'line-' + line.id} className='line'>
                                <PromptString number={2} />
                                <input
                                    type='text'
                                    autoFocus
                                    autoCapitalize='none'
                                    onKeyDown={this.handleKeyDown}
                                    onKeyPress={this.handleKeyPress}
                                    disabled={!line.isActive}
                                    ref={line.isActive ? 'activeLine' : null}
                                />
                                <pre dangerouslySetInnerHTML={{ __html: line.output }}></pre>
                            </div>
                        )
                    })
                }
            </Terminal>
        )
    }
}

export default withGoogleCalendar(MainTerminal)