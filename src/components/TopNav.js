import React, { Component } from 'react'
import { Menu, Icon, Button, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard';



export default class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    }
  };

  componentDidMount(){
    let path = window.location.hash
    console.log(path)
    var activeItem = "home" //assume home to start
    if (path.startsWith("#/blog")) {
      activeItem = "blog"
    }
    else if (path.startsWith("#/projects")) {
      activeItem = "projects"
    }
    else if (path.startsWith("#/experience")) {
      activeItem = "experience"
    }
    else if (path.startsWith("#/D3")) {
      activeItem = "d3"
    }
    else if (path.startsWith("#/plants")) {
      activeItem = "plants"
    }
    console.log(activeItem)
    this.setState({
      activeItem: activeItem
    })
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleIconClick = (e, { name }) => {
    if (name === "linkedin") {
      window.location.href = "https://www.linkedin.com/in/bryce-pedroza"
    }
    else if (name === "instagram") {
      window.location.href = "https://www.instagram.com/brycepedroza/"
    }
    else if (name === "github") {
      window.location.href = "https://github.com/brycepedroza"
    }
  }


  render() {
    const { activeItem } = this.state

    return (
        <div style={{paddingTop: 10, width: "100%"}} >
          <Menu pointing secondary vertical style={{width: "100%", fontSize: "1.5em"}} >
            <Menu.Item
              name='home'
              as={Link} to="/"
              active={this.state.activeItem === 'home'}
              onClick={this.handleItemClick.bind(this)}
              style={{color: 'white', padding: "10px 0px"}}/>
            <Menu.Item
              name='experience'
              as={Link} to="/experience"
              active={this.state.activeItem === 'experience'}
              onClick={this.handleItemClick.bind(this)}
              style={{color: 'white', padding: "10px 0px"}}/>
            <Menu.Item
              name='projects'
              as={Link} to="/projects"
              active={this.state.activeItem === 'projects'}
              onClick={this.handleItemClick.bind(this)}
              style={{color: 'white', padding: "10px 0px"}}/>
            <Menu.Item
              name='blog'
              as={Link} to="/blog"
              active={this.state.activeItem === 'blog'}
              onClick={this.handleItemClick.bind(this)}
              style={{color: 'white', padding: "10px 0px"}}/>
            <Menu.Item
              name='d3'
              as={Link} to="/D3"
              active={this.state.activeItem === 'd3'}
              onClick={this.handleItemClick.bind(this)}
              style={{color: 'white', padding: "10px 0px"}}/>
          </Menu>
          <Icon name='instagram'
            size="big"
            style={{ cursor: 'pointer' }}
            onClick={this.handleIconClick.bind(this)}/>
          <Icon name='linkedin'
            size="big"
            style={{ cursor: 'pointer' }}
            onClick={this.handleIconClick.bind(this)}/>
            <Icon name='github'
              size="big"
              style={{ cursor: 'pointer' }}
              onClick={this.handleIconClick.bind(this)}/>
          <CopyToClipboard text="brycepedroza@gmail.com">
          <div style={{display: "inline", cursor: "pointer"}}>
          <Popup
            on='click'
            trigger={<Icon name='mail' size="big" value = "brycepedroza@gmail.com"/>}
            content="Email copied!"
            value = "brycepedroza@gmail.com"
            basic
          />
          </div>
          </CopyToClipboard>


        </div>
    )
  }
}
