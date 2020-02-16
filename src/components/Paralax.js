import React, { Component } from 'react';
import { Paralax } from '../styled-components/global';

class ParalaxComponent extends Component {
  render(){
    const { img } = this.props;
    return (
      <Paralax style={{backgroundImage: `url("${img}")`}}/>
    );
  }
}

export default ParalaxComponent;
