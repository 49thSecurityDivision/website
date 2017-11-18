import React, { Component } from 'react'

class File extends Component {
    render() {
        return (
            <span>
                {this.props.isVisible ?
                    <div className="file">{this.props.children}</div>
                : null}
            </span>
        )
    }
}

export default File