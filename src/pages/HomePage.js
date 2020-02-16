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
                  <Subtitle>Lars has a passion for clean design, innovative solutions, and refreshing looks. She has experience in tile design, landscape architecture, and floral arrangement.</Subtitle>
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
