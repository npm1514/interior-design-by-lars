import React, { Component } from 'react';
import { MobileHeader, Title, MenuWrap } from '../styled-components/global';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from './Drawer'

class MobileHeaderComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  toggleDrawer = () => {
    this.setState({menuOpen: !this.state.menuOpen });
  }
  render(){
    return (
      <MobileHeader>
        <MenuWrap><MenuIcon fill="#33333380" onClick={this.toggleDrawer}/></MenuWrap>
        <Title>Interior Design By Lars</Title>
        <Drawer open={this.state.menuOpen} toggleDrawer={this.toggleDrawer}/>
      </MobileHeader>
    );
  }
}

export default MobileHeaderComponent;
