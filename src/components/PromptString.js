import React, { Component } from 'react'

class PromptString extends Component {
    render() {
        return (
            <span className={`ps${this.props.number}`}></span>
        )
    }
}

export default PromptString