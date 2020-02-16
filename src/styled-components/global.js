import styled from 'styled-components';

//page
  export const PageWrapper = styled.div`
    width: calc(100% - 48px);
    margin: 24px;
    min-height: 100vh;
    @media(min-width: 600px){
      margin: 48px;
      width: calc(100% - 96px);
    }
  `;

  export const PageContent = styled.div`
    width: 100%;
    min-height: 100vh;
    text-align: center;
    img {
      width: 100%;
    }
  `;
  export const Title = styled.h1`
    font-family: 'Noto Serif JP', serif;
    font-size: 18px;
    text-align: center;
    color: #333;
    margin: 0 24px;
    font-weight: 100;
    @media (min-width: 350px){
      font-size: 20px;
    }
  `;

  //header
  export const Header = styled.header`
    width: 100%;
    height: 52px;
    @media(min-width: 600px){
      height: 130px;
    }
  `;
  export const MobileHeader = styled.div`
    width: 100%;
    display: block;
    height: 52px;
    position: relative;
    @media (min-width: 600px){
      display: none;
    }
  `;
  export const DesktopHeader = styled.div`
    width: 100%;
    height: 100%;
    display: none;
    position: relative;
    @media (min-width: 600px){
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;

  export const MenuWrap = styled.div`
    position: absolute;
    left:0;
    top: 2.5px;
  `;

  export const BottomWrap = styled.div`
    width: 100%;
    position: absolute;
    bottom: -68px;
    display: flex;
    justify-content: center;
    a {
      margin: 0 10px;
      font-family: 'Noto Serif JP', serif;
      color: #fff;
    }
    a:hover {
      cursor: pointer;
      color: #ffffff66;
    }
  `;

  //Footer
  export const Footer = styled.footer`
    width: 100%;
    font-family: 'Noto Serif JP', serif;
    font-size: 16px;
    text-align: center;
    padding: 16px 0;
    display: flex;
    justify-content: center;
  `;
