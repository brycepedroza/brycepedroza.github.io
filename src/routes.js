import React, { Component } from 'react'
import { Grid, Image, Header} from 'semantic-ui-react'
import TopNav from './components/TopNav'
import Bryce from './components/Bryce'

import { Route, Switch, withRouter, Redirect } from "react-router-dom";


const bryce = require('./images/headshot.jpg')
const header_styles = {
  color: "white",
  fontSize: "2em",
  flexGrow: 0,
}

export default class Routes extends Component {


  render() {

    return (
      <Grid stackable>
        <Grid.Column width={4}>
          <Header size="huge" style={header_styles}> Bryce Pedroza </Header>
          <Image rounded src={bryce}/>
          <TopNav/>
        </Grid.Column>

        <Grid.Column stretched width={12} style={{overflowX: "auto", overflowY: "none"}}>
          <Switch>
            <Route exact path="/" component={ () =>
              <Bryce/>
            }/>
            <Route exact path="/projects" component={ () =>
              <p> Projects </p>
            }/>
            <Route exact path="/experience" component={ () =>
              <p> Experience </p>
            }/>
            <Route exact path="/blog" component={ () =>
              <h1> Blog posts coming soon </h1>
            }/>
            </Switch>
        </Grid.Column>
      </Grid>
    )
  }
}
