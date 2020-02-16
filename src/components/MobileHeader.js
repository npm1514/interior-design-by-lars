import React, { Component } from 'react';
import { MobileHeader, Title, MenuWrap } from '../styled-components/global';
import MenuIcon from '@material-ui/icons/Menu';
// import Drawer from './Drawer'

class MobileHeaderComponent extends Component {
  render(){
    return (
      <MobileHeader>
        <MenuWrap><MenuIcon/></MenuWrap>
        <Title>Interior Design By Lars</Title>
        {
          // <Drawer/>
        }

      </MobileHeader>
    );
  }
}

export default MobileHeaderComponent;
