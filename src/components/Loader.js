import React, { Component } from 'react'

import { loader_text } from 'output'

class Loader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lines: loader_text.split('<br>'),
            renderedLines: []
        }
    }

    componentDidMount() {
        this.state.lines.forEach((line, i) => {
            setTimeout(() => {
                console.log(line)
                this.setState({
                    renderedLines: [
                        ...this.state.renderedLines,
                        line
                    ]
                })
            }, 200 * i)
        })
    }

    render() {
        return (
            <div className='loader'>
                {this.state.renderedLines.map((line, i) => (
                    <span key={i}>{line}<br/></span>
                ))}
            </div>
        )
    }
}

export default Loader