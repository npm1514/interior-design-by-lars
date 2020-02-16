import React, { Component } from 'react';
import { Header, Footer, ExperienceContact } from '../components';
import { PageWrapper, PageContent } from '../styled-components/global';

class About extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <PageContent>
                <img src="https://cdn.onekindesign.com/wp-content/uploads/2016/02/Scandinavian-Bedroom-Ideas-01-1-Kindesign.jpg"/>
              </PageContent>
              <ExperienceContact/>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default About;
