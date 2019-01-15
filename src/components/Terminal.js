import React, { Component } from 'react'

class Terminal extends Component {
    render() {
        const { isVisible, children, ...rest } = this.props
        return (
            <span>
                { this.props.isVisible ?
                    <div className='terminal' {...rest}>
                        {this.props.children}
                    </div>
                : null }
            </span>
        )
    }
}

export default Terminal