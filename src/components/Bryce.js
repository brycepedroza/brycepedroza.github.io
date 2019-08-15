import React, { Component } from 'react'
import { Container, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const starbucks = "Starbucks".link("https://starbucks.com")
const defcon = require('../images/defcon.jpg')

const professionalInfo = " Hey, I'm Bryce Pedroza. I'm a Graduate student at Arizona State \
                           University studying Computer Science. I'm currently \
                           conducting my thesis in the area of Cybersecurity with Big Data. \
                           Along with this, I'm an information security intern at " + starbucks + " where \
                           where I assist in vulnerability management for the organization. \
                           In my spare time, I like to work on personal projects (like this site!). \
                           Feel free to take a look at some of my projects over to the side. \
                           "

const header_styles = {
  color: "white",
  fontSize: "2em",
  flexGrow: 0,
}

export default class Bryce extends Component {

  render() {
    return (
      <Container text>
      <div style={{display: "flex", alignItems: "center", height: "100%"}}>
        <p style={{fontSize: "1.15em"}}>
          Hey, I'm Bryce Pedroza. I'm a Graduate student at Arizona State
          University studying Computer Science. I'm currently
          conducting my thesis in the area of Big Data within Cybersecurity.
          Along with this, I'm an information security intern at <a href="https://starbucks.com"> Starbucks </a>
          where I assist in vulnerability management and other security tasks for the organization.
          Take a look at my experiences for more on Starbucks and my prior work experience!
          <br/><br/>
          In my spare time, I like to work on personal projects (like this site!).
          I built with React.js and was a quick project to highlight my front end skills.
          Check out my other projects over to the side to see some of the other technologies I've used.
          <br/><br/>
          When I am not coding, I'm hiking, building desks, making amateur YouTube content,
          attending <a href="https://www.defcon.org/"> DEFCON </a>,
          playing <a href="https://en.wikipedia.org/wiki/Codenames_(board_game)"> Code Names, </a>
          or taking care of my plants!
         </p>
       </div>

      </Container>
    )
  }
}
