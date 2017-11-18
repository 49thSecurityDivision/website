import React, { Component } from 'react'

class File extends Component {
    render() {
        const { top, left } = this.props.position

        return (
            <span>
                {this.props.isVisible ?
                    <div className="file" style={{ top: top, left: left }}>
                        {this.props.children}
                    </div>
                : null}
            </span>
        )
    }
}

export default File