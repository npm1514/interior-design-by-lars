import React, { Component } from 'react';
import { DesktopHeader, BottomWrap, Title } from '../styled-components/global';

class DesktopHeaderComponent extends Component {
  render(){
    return (
      <DesktopHeader>
        <Title>Interior Design By Lars</Title>
        <BottomWrap>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/work">Work</a>
        </BottomWrap>
      </DesktopHeader>
    );
  }
}

export default DesktopHeaderComponent;
