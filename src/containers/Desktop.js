import React, { Component } from 'react'

import Nav from 'components/Nav'

import JoinClubFile from 'containers/JoinClubFile'
import MainTerminal from 'containers/MainTerminal'

class Desktop extends Component {
    render() {
        return (
            <div className='main'>
                <Nav />
                <MainTerminal isVisible />
                <JoinClubFile isVisible />
            </div>
        )   
    }
}

export default Desktop