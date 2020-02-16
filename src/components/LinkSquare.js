import React, { Component } from 'react';
import { LinkSquare, SquareLink, LinkText } from '../styled-components/global';

class LinkSquareComponent extends Component {
  render(){
    const { img, link, text } = this.props;
    return (
      <SquareLink href={link}>
        <LinkSquare style={{backgroundImage: `url("${img}")`}}>
          <LinkText>{text}</LinkText>
        </LinkSquare>
      </SquareLink>
    );
  }
}

export default LinkSquareComponent;
