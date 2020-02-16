import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageWrapper, PageContent } from '../styled-components/global';

class Work extends Component {
    render(){
      return (
          <PageWrapper>
              <Header/>
              <PageContent>
                <img src="https://cdn.onekindesign.com/wp-content/uploads/2016/02/Scandinavian-Bedroom-Ideas-01-1-Kindesign.jpg"/>
              </PageContent>
              <Footer/>
          </PageWrapper>
      );
    }
}

export default Work;
