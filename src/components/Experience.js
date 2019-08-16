import React, { Component } from "react"
import { Container, Image, Button } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { Timeline, TimelineItem }  from "vertical-timeline-component-for-react";
import { Event } from "react-timeline-scribble";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import pdf from '../statics/BrycePedrozaSpring2019Resume.pdf';

const logos = {
  starbuckslogo: require("../images/starbuckslogo.png"),
  walmartlogo: require("../images/walmartlogo.png"),
  asulogo: require("../images/asulogo.png"),
  playwelllogo: require("../images/playwelllogo.png"),
}

const header_styles = {
  color: "black",
  margin: 0
}

const experience = require("../statics/experience.json")
const timeline_items = experience.map((position, index) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<p className="content-styles" style={{color: "white"}}>{position.date}</p>}
    iconStyle={{ background: 'white', color: '#fff' }}
    icon={<Image circular={position.make_circular} style={{marginTop: position.offset}} src={logos[position.logo]} size="tiny"/>}>
    <h2 style={header_styles}>{position.title}</h2>
    <h4 style={header_styles}>{position.location}</h4>
    <p className="content-styles">{position.desc}</p>
  </VerticalTimelineElement>
  )
)

export default class Bryce extends Component {

  render() {
    return (
      <div>
        <div className="bounce-in-div">
          <h1> Where I've been. </h1>
          <h4 style={{margin: 5}}> Here's a timeline highlighting some of my important work experience. </h4>
          <h4 style={{margin: 5}}> Want to see everything? Just check out my resume. </h4>
          <Button style={{background:"#A787AB"}} size="massive"><a href={pdf} target="_blank" style={{color: "white"}}>Download Resume</a></Button>
        </div>
        <VerticalTimeline>
          {timeline_items}
        </VerticalTimeline>
      </div>
    )
  }
}
