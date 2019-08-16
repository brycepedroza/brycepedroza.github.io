import React, { Component } from "react"
import { Container, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { Timeline, TimelineItem }  from "vertical-timeline-component-for-react";
import { Event } from "react-timeline-scribble";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const starbuckslogo = require("../images/starbuckslogo.png")
const walmartlogo = require("../images/walmartlogo.png")
const asulogo = require("../images/asulogo.png")

const header_styles = {
  color: "black",
  margin: 0
}

export default class Bryce extends Component {

  render() {
    return (
      <div>
      <h1 className="bounce-in-div"> Where I've been. </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2018 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<Image src={starbuckslogo} size="tiny"/>}>
          <h3 style={header_styles}>Information Securuity Intern</h3>
          <h4 style={header_styles}>Scottsdale, AZ</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2019"
          iconStyle={{ background: 'white', color: '#fff' }}
          icon={<Image style={{marginTop: 8}} src={asulogo}/>}
        >
          <h3 style={header_styles}>BS in Computer Science</h3>
          <h4 style={header_styles}>Tempe, AZ</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2018 - August 2018"
          iconStyle={{ background: 'white', color: '#fff' }}
          icon={<Image style={{marginTop: -1}} src={walmartlogo}/>}
        >
          <h3 style={header_styles}>Software Engineering Intern</h3>
          <h4 style={header_styles}>Bentonville, AR</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    )
  }
}
