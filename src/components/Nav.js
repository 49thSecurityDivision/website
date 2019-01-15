import React, { Component } from 'react'

import InternalClock from 'components/InternalClock'

class Nav extends Component {
    render() {
        return (
            <div className='topbar'>
                <span className='left'></span>
                <span className='right'>
                    <span className='welcome'>guest</span>
                    <InternalClock />
                    <i className="material-icons">power_settings_new</i>
                </span>
            </div>
        )
    }
}

export default Nav