import React, { Component } from "react"
import { Grid, Image, Header } from "semantic-ui-react"
import TopNav from "./components/TopNav"
import Bryce from "./components/Bryce"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import ConwaysGame from "./components/Conways"


import { Route, Switch, withRouter, Redirect } from "react-router-dom";


const bryce = require("./images/italy.jpg")
const grandcanyon = require("./images/grandcanyon.jpg")

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
          <Image size="medium"rounded src={bryce}/>
          <TopNav/>
        </Grid.Column>

        <Grid.Column stretched width={12} style={{overflowX: "auto", overflowY: "none"}}>
          <Switch>
            <Route exact path="/" component={ () =>
              <Bryce/>
            }/>
            <Route exact path="/projects" component={ () =>
              <Projects/>
            }/>
            <Route exact path="/projects/conways" component={ () =>
              <ConwaysGame/>
            }/>
            <Route exact path="/experience" component={ () =>
              <Experience/>
            }/>
            <Route exact path="/blog" component={ () =>
              <div className="bounce-in-div">
                <h1> Blog posts coming soon! </h1>
                <Image rounded size="huge" src={grandcanyon}/>
              </div>
            }/>
            </Switch>
        </Grid.Column>
      </Grid>
    )
  }
}
