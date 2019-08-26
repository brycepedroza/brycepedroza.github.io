import React, { Component } from "react"
import { Container, Image, Button, Item, Icon } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { Timeline, TimelineItem }  from "vertical-timeline-component-for-react";
import { Event } from "react-timeline-scribble";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import pdf from '../statics/BrycePedrozaSpring2019Resume.pdf';

const logos = {
  hadoop: require("../images/mapreducelogo.png"),
  react: require("../images/reactlogo.jpg"),
  conways: require("../images/conways.jpeg"),
}

const description = [
  'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
  'tiny stature, and even others for their massive size.',
].join(' ')

const header_styles = {
  color: "black",
  margin: 0
}


export default class Projects extends Component {


  render() {
    return (
      <Container>
        <div className="bounce-in-div">
          <h1> What I've done </h1>
          <h4 style={{margin: 5}}> Here are a couple personal projects that I have up on GitHub. </h4>
          <h4 style={{margin: 5}}> Check out my GitHub profile to the side and take a look at any repo you would like! </h4>
          <Item.Group>
            <Item as='a' href="https://github.com/brycepedroza/docker-hadoop-python" target="_blank">
              <Item.Image size='small' src={logos.hadoop} />
              <Item.Content >
                <Item.Header style={{color: "white"}}>docker-hadoop-python</Item.Header>
                <Item.Description style={{color: "white"}}>
                  <p>Im building an application for my thesis to implement access control within Hadoop Map Reduce. The goal is to augment the current access control features available to limit unauthorized access to sensitive information hidden in a sea of big data. Along with Apache Hadoop, I am using Docker and Python. </p>
                </Item.Description>
              </Item.Content>
            </Item>

            <Item as='a' href="https://github.com/brycepedroza/brycepedroza.github.io" target="_blank">
            <Item.Image size='small' src={logos.react} />
              <Item.Content >
                <Item.Header style={{color: "white"}}>brycepedroza.github.io</Item.Header>
                <Item.Description style={{color: "white"}}>
                  <p>Do you like this site? Feel free to checkout its source code to get a look under the hood. </p>
                </Item.Description>
              </Item.Content>
            </Item>

            <Item as='a' href="https://github.com/brycepedroza/Conway-s-Game-of-Life" target="_blank">
            <Item.Image size='small' src={logos.conways} />
              <Item.Content >
              <Item.Header style={{color: "white"}}>Conway-s-Game-of-Life</Item.Header>
                <Item.Description style={{color: "white"}}>
                  <p>Example of a randomly generated area of space to simulate Conway's Game of Life Conway’s Game of Life is a zero-player game that follows a simple set of rules as if to simulate living beings. Cells are born and die on an infinite 2D grid that the player can interact with by choosing the initial setup of the cells on the grid. Once an initial setup is created, the user sits back and watches as cells live and die by following a select set of predetermined rules</p>
                  <Button className="my-button" as={Link} to="projects/conways"> Check out a live example! </Button>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>

        </div>
      </Container>
    )
  }
}
