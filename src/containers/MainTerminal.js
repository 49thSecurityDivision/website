import React, { Component } from 'react'

import Terminal from 'components/Terminal'

class MainTerminal extends Component {
    render() {
        return (
            <Terminal isVisible={this.props.isVisible}>
                <div className='header'><span className='wd'>home</span></div>

                <div className='line'>
                    <span className='ps1'></span> Welcome 49sd at the UNC Charlotte.
                    </div>

                <div className='line'>
                    <span className='ps1'></span> The 49th Security Division started in 2009 with six students driven by their passion for security. Since being established, we have grown to around fifty or more members and have many accomplishments behind us... With plenty more to come. The club has since developed relationships with outside professionals, organizations, and companies. Our reach is far beyond just the UNC Charlotte campus.We compete in multiple competitions each year, including International Capture the Flag (iCTF) and CCDC. These competitions help to improve practical security skills and provide real world experience. We also travel to various security conferences on the east coast. Some of the conferences we attend are ISSA Summit, Carolina Con, ShmooCon, and B-Sides.
                    </div>

                <div className='line'>&nbsp;</div>

                <div className='line'>
                    <span className='ps1'></span>
                    <span className="text-highlight"> Please turn on javascript to interact.</span>
                </div>
            </Terminal>
        )
    }
}

export default MainTerminal