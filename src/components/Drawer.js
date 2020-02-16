import React, { Component } from 'react'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

class TemporaryDrawer extends Component {
  render(){
    const { toggleDrawer, open } = this.props;
    return (
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer}
        >
          <List style={{width: "250px"}}>
            {['Home', 'About', 'Work'].map((text, index) => (
              <a href={`/${text.toLowerCase()}`} style={{color: "#333333b3"}} key={index}>
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              </a>
            ))}
          </List>
        </Drawer>
    );
  }
}

export default TemporaryDrawer;
