import React, { Component } from 'react';
import { Header, Footer, ExperienceContact, LinkSquare, Paralax } from '../components';
import { PageWrapper, PageContent, FlexSplit, SplitDiv, Subtitle } from '../styled-components/global';

class About extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <PageContent>
                <Paralax img="/images/lars.jpg" />
                <SplitDiv style={{margin: "100px 0"}}>
                  <Subtitle>Lars has a passion for clean design, innovative solutions, and refreshing looks. She has experience in tile design, landscape architecture, and floral arrangement.</Subtitle>
                </SplitDiv>
                <FlexSplit>
                  <SplitDiv>
                    <LinkSquare img="/images/IMG_6151.JPG" text="Home" link="/"/>
                  </SplitDiv>
                  <SplitDiv>
                    <LinkSquare img="/images/tiles_2.jpg" text="Work" link="/work"/>
                  </SplitDiv>
                </FlexSplit>
              </PageContent>
              <ExperienceContact/>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default About;
