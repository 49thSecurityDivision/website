import React, { Component } from 'react'

class Terminal extends Component {
    render() {
        return (
            <div class='terminal'>
                <div class='header'><span class='wd'>home</span></div>

                <div class='line'>
                    <span class='ps1'></span> Welcome 49sd at the UNC Charlotte.
                </div>

                <div class='line'>
                    <span class='ps1'></span> The 49th Security Division started in 2009 with six students driven by their passion for security. Since being established, we have grown to around fifty or more members and have many accomplishments behind us... With plenty more to come. The club has since developed relationships with outside professionals, organizations, and companies. Our reach is far beyond just the UNC Charlotte campus.We compete in multiple competitions each year, including International Capture the Flag (iCTF) and CCDC. These competitions help to improve practical security skills and provide real world experience. We also travel to various security conferences on the east coast. Some of the conferences we attend are ISSA Summit, Carolina Con, ShmooCon, and B-Sides.
                </div>

                <div class='line'>&nbsp;</div>

                <div class='line'>
                    <span class='ps1'></span>
                    <span class="text-highlight"> Please turn on javascript to interact.</span>
                </div>
            </div>
        )
    }
}

export default Terminal