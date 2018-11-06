import React, { Component } from 'react'

import Loader from 'components/Loader'
import MainTerminal from 'containers/MainTerminal'
import Nav from 'components/Nav'

class Desktop extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoading: true }
        this.timer = setTimeout(this.hideLoader, 3200)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    hideLoader = () => {
        this.setState({ isLoading: false })
    }

    render() {
        if (this.state.isLoading) {
            return <Loader />
        } else {
            return (
                <div className='main'>
                    <Nav />
                    <MainTerminal isVisible />
                </div>
            )
        }
    }
}

export default Desktop