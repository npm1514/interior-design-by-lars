import React, { Component } from 'react';
import { Header, Footer, ExperienceContact, Paralax, LinkSquare } from '../components';
import { PageWrapper, PageContent, SplitDiv, Subtitle, FlexSplit } from '../styled-components/global';

class Home extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <PageContent>
                <Paralax img="/images/IMG_6151.JPG" />
                <SplitDiv style={{margin: "100px 0"}}>
                  <Subtitle>Design is not just what it looks like and feels like. Design is how it works.</Subtitle>
                </SplitDiv>
                <FlexSplit>
                  <SplitDiv>
                    <LinkSquare img="/images/lars.jpg" text="About" link="/about"/>
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

export default Home;
