import React, { Component } from 'react'

import File from 'components/File'

class JoinClubFile extends Component {
    constructor(props) {
        super(props)
        this.state = { top: '50px', left: '0px' }
    }

    render() {
        return (
            <File isVisible={this.props.isVisible} position= {{ top: this.state.top, left: this.state.left}}>
                <ol>
                    <li>Navigate to 49sd orgsync</li>
                    <li>Log into the UNCC web auth</li>
                    <li>In the top-right corner, click My Memberships, then Find Org</li>
                    <li>Search for 49th Security Division</li>
                    <li>Click the resulting link</li>
                    <li>Click “Join Now”</li>
                </ol>
            </File>
        )
    }
}

export default JoinClubFile