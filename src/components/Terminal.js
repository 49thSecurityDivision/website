import React, { Component } from 'react'

class Terminal extends Component {
    render() {
        return (
            <span>
                { this.props.isVisible ?
                    <div className='terminal'>{this.props.children}</div>
                : null }
            </span>
        )
    }
}

export default Terminal