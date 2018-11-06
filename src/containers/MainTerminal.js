import React, { Component } from 'react'

import { command_output, help_output, error_output } from 'output'

import Terminal from 'components/Terminal'
import PromptString from 'components/PromptString'

class MainTerminal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numLines: 1,
            lines: [{
                id: 0,
                isActive: true,
                output: null
            }],
            isLoading: true
        }
    }

    handleCommand = (event) => {
        if (event.which === 13) {
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
                    break
                case 'calendar':
                    output = command_output['calendar']
                    break
                case 'join':
                    output = command_output['join']
                    break
                // new commands: whoami
                case 'help':
                    help_output.forEach((command) => output += command.output + '\n')
                    break
                default:
                    output = value + error_output // TODO: substring to first word
            }

            let lines = []
            let nextIndex = this.state.numLines            

            if (value !== 'clear') {
                lines = this.state.lines
                lines[lines.length - 1].isActive = false
                lines[lines.length - 1].output = output
            }

            lines.push({ id: nextIndex, isActive: true, output: null })
            this.setState({ numLines: nextIndex + 1, lines: lines })
        }
    }

    render() {
        return (
            <Terminal isVisible={this.props.isVisible}>
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
                    this.state.lines.map((line, i) => {
                        return (
                            <div key={line.id} className='line'>
                                <PromptString number={2} />
                                <input
                                    type='text'
                                    autoFocus
                                    autoCapitalize='none'
                                    onKeyPress={this.handleCommand}
                                    disabled={!line.isActive}
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

export default MainTerminal