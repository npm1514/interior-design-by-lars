import React, { Component } from 'react';
import { Header, Footer, ExperienceContact, Paralax, LinkSquare } from '../components';
import { PageWrapper, PageContent, FlexSplit, SplitDiv, Title } from '../styled-components/global';

class Work extends Component {
  render(){
    return (
      <PageWrapper>
        <Header/>
        <PageContent>
          <Paralax img="/images/herringbone.jpg" />
          <Title style={{marginTop: "100px"}}>Commercial Work</Title>
          <FlexSplit style={{marginTop: 0 }}>
            <SplitDiv>
              <img src="/images/IMG_6151.JPG"/>
              <img src="/images/mbb_1340_1_2_small.jpg"/>
              <img src="/images/shower.jpg"/>
              <img src="/images/mbb_1274_5_6_small.jpg"/>
              <img src="/images/mbb-29_30_31_small.jpg"/>

            </SplitDiv>
            <SplitDiv>
              <img src="/images/IMG_5935.JPG"/>
              <img src="/images/masterpiece.jpg"/>
              <img src="/images/mbb_1280_1_2_small.jpg"/>

            </SplitDiv>
          </FlexSplit>
          <Title style={{marginTop: "100px"}}>Tile Work</Title>
          <FlexSplit style={{marginTop: 0 }}>
            <SplitDiv>
              <img src="/images/IMG_5978.JPG"/>
              <img src="/images/IMG_6290.JPG"/>
              <img src="/images/IMG_6295.JPG"/>
              <img src="/images/IMG_6362.JPG"/>
              <img src="/images/IMG_6365.JPG"/>
              <img src="/images/IMG_6367.JPG"/>
              <img src="/images/moretiles.jpg"/>
              <img src="/images/petrified.jpg"/>
            </SplitDiv>
            <SplitDiv>
              <img src="/images/IMG_6292.JPG"/>
              <img src="/images/IMG_6293.JPG"/>
              <img src="/images/IMG_6361.JPG"/>
              <img src="/images/IMG_6363.JPG"/>
              <img src="/images/IMG_6364.JPG"/>
              <img src="/images/IMG_6366.JPG"/>
              <img src="/images/IMG_6368.JPG"/>
              <img src="/images/tiles_2.jpg"/>
              <img src="/images/tiles.jpg"/>
            </SplitDiv>
          </FlexSplit>
          <FlexSplit>
            <SplitDiv>
              <LinkSquare img="/images/IMG_6151.JPG" text="Home" link="/"/>
            </SplitDiv>
            <SplitDiv>
              <LinkSquare img="/images/lars.jpg" text="About" link="/about"/>
            </SplitDiv>
          </FlexSplit>
        </PageContent>
        <ExperienceContact/>
        <Footer/>
      </PageWrapper>
    );
  }
}

export default Work;
