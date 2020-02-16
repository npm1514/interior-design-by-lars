import React, { Component } from 'react';
import { Footer } from '../styled-components/global';

class FooterComponent extends Component {
  render(){
    return (
      <Footer>
        Interior Design By Lars<br/>copyright {new Date().getFullYear()}
      </Footer>
    );
  }
}

export default FooterComponent;
