import React, { Component } from "react"
import { Container, Image, Button, Card } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { Timeline, TimelineItem }  from "vertical-timeline-component-for-react";
import { Event } from "react-timeline-scribble";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import pdf from '../statics/BrycePedrozaFall2019Resume.pdf';
import * as d3 from "d3";
import TimelinesChart from 'timelines-chart';

const data = require("../statics/timeline.json")
const skills = require("../images/resources/index.js")
console.log(skills)

const resources = [
  "aws",
  "azure",
  "bash",
  "css",
  "d3",
  "docker",
  "faust",
  "firebase",
  "gcp",
  "git",
  "hadoop",
  "html",
  "java",
  "javascript",
  "jenkins",
  "kafka",
  "mongo",
  "mysql",
  "node",
  "python",
  "react",
  "sql",
  "tableau",
  "woodworking"
]

export default class Experience extends Component {
  constructor(props){
    super(props)
    this.state = {
      prev_name: "",
      show_card: false,
      desc: ""
    }
  }

  componentDidMount() {
    this.drawChart();
  }

  draw_experience(logos, name, desc) {
    var data;
    if (name === this.state.prev_name) {
      data = resources
      this.setState({
        prev_name: "",
        show_card: false,
        desc: ""
      })
    }
    else {
      data = logos
      this.setState({
        prev_name: name,
        show_card: true,
        desc: desc
      })
    }
    var images = d3.select('#mySkills').selectAll('.bounce-in-div').data(data, function(d) {return d})
    images.exit().remove()
    console.log(data)
    const img_size = 75
    images.enter().append('svg')
      .attr("width", img_size)
      .attr("height", img_size)
      .style("margin-left", "5px")
      .attr("class", "bounce-in-div").append('svg:image')
        .attr('xlink:href', function(d) {return skills[d.toLowerCase()]})
        .attr('width', img_size)
        .attr('height', img_size)
        .attr("filter", "grayscale(100%)");
  }

  get_event(e, json){
    var selected_details = {}
    for (var group in json){
      // console.log(json[group])
      if (json[group].group === e.group) {
        group = json[group]
        for (var data in group.data){
          if (group.data[data].label === e.label){
            data = group.data[data]
            for (var index in data.data) {
              if (data.data[index].val === e.val) {
                selected_details = data.data[index]
                break;
              }
            }
          }
        }
      }
    }
    console.log(selected_details.desc)
    this.draw_experience(selected_details.skills, selected_details.val, selected_details.desc)
  }

  drawChart() {
    TimelinesChart()
      .data(data)
      .maxHeight(1200)
      .width(1000)
      .leftMargin(100)
      .rightMargin(150)
      .enableOverview(false)
      .timeFormat("%Y-%m-%d")
      .maxLineHeight(50)
      .zQualitative(true)
      .onSegmentClick((e) => {
        this.get_event(e, data)
      })
      (document.getElementById('myPlot'));
    this.draw_experience([], "")
  }

  render() {
    return (
      <Container id="resume-timeline">
        <div className="bounce-in-div">
          <h1> An Interactive Resume Timeline using D3</h1>
          <h4 style={{margin: 5}}> I've done quite a lot. Click on an item and see what I've learned along the way! </h4>
          <h4 style={{margin: 5}}> Feel free to check out my experience and projects over to the left. </h4>

        </div>
        <div id="myPlot"> </div>
        {this.state.show_card ?
          <div className="d3Card">
              <Card style={{margin: 'auto'}}>
                <Card.Content>
                  <Card.Header>{this.state.prev_name}</Card.Header>
                  <Card.Description>
                    {this.state.desc}
                  </Card.Description>
                </Card.Content>
              </Card>
          </div>  : null
        }
        <div style={{textAlign: 'center'}} id="mySkills"> </div>

      </Container>
    )
  }
}
