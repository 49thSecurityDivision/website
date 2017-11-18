import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from 'components/Nav'
import Terminal from 'components/Terminal'

class Desktop extends Component {
    render() {
        return (
            <Router>
                <div class='main'>
                    <Nav />
                    <div class='container'>
                        <Switch>
                            <Route exact path='/' component={Terminal} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Desktop