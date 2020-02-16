import React, { Component } from 'react';
import { FlexSplit, SplitDiv, Subtitle, Button, Title } from '../styled-components/global';

class ExperienceContactComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      message: "",
      displayedMessage: ""
    }
  }
  changeState = (e, prop) => {
    let obj = {};
    obj[prop] = e.target.value;
    this.setState(obj)
  }
  displayMessage = (message) => {
    this.setState({
      displayedMessage: message
    }, () => {
      setTimeout(() => {
        this.setState({
          displayedMessage: ""
        })
      }, 4000)
    })
  }
  sendEmail = (e) => {
    e.preventDefault()
    const { email, message } = this.state;
    var data = {
      email: email,
      message: message
    }
    fetch('/emailer', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        email: "",
        message: ""
      })
      this.displayMessage("An email has been sent to Lars. She will respond with any further correspondance.")
    })
    .catch(err => console.error(err))
  }
  render(){
    const { email, message, displayedMessage } = this.state;
    return (
      <div>
      <FlexSplit>
        <SplitDiv>
          <Subtitle>Work Experience</Subtitle>
          <p>Designer/Sales - Anasazi Stone</p>
          <p>Residential Tile Design</p>
          <p>Assistant Landscape Designer - Organic Earth Designs</p>
          <p>Floral Arrangement, Wedding Reception Design</p>
          <p>Interior Design Intern - Osmond Design</p>
          <p>Spatial Design and Organization</p>
        </SplitDiv>
        <SplitDiv>
          <Subtitle>Contact</Subtitle>
          <p>slarsrobertson@gmail.com</p>
          <p>385-274-8887</p>
          <form onSubmit={this.sendEmail}>
            <input value={email} onChange={(e) => {this.changeState(e, "email")}} placeholder="Email Address" type="email"/>
            <textarea value={message} onChange={(e) => {this.changeState(e, "message")}} placeholder="Message"/>
            <Button type="submit">SUBMIT</Button>

          </form>
        </SplitDiv>
      </FlexSplit>
      {
        displayedMessage &&
        <Title style={{color: "#000"}}>{displayedMessage}</Title>
      }
      </div>
    );
  }
}

export default ExperienceContactComponent;
