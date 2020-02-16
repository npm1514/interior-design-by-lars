import React, { Component } from 'react';
import { Header } from '../styled-components/global';
import { MobileHeader, DesktopHeader } from './'

class HeaderComponent extends Component {
  render(){
    return (
      <Header>
        <DesktopHeader/>
        <MobileHeader/>
      </Header>
    );
  }
}

export default HeaderComponent;
