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
    margin: 8px 24px;
    font-weight: 100;
    @media (min-width: 350px){
      font-size: 20px;
    }
  `;

  export const Button = styled.button`
    font-family: 'Noto Serif JP', serif;
    text-align: center;
    color: #333;
    font-weight: 100;
    margin: 0;
    font-size: 12px;
    padding: 8px 16px;
    background: #00000009;
  `;

  export const Subtitle = styled.h2`
    font-family: 'Noto Serif JP', serif;
    font-size: 16px;
    text-align: left;
    color: #333;
    font-weight: 100;
    line-height: 3;
    @media (min-width: 350px){
      font-size: 18px;
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
    margin-top: 100px;
    justify-content: center;
  `;

  export const FlexSplit = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 100px;
    input {
      width: 100%;
      padding: 16px;
      display: block;
      margin: 16px 0;
      font-size: 15px;
      border: 1px solid #eee;
      font-family: 'Noto Serif JP', serif;
    }
    textarea {
      width: 100%;
      padding: 16px;
      display: block;
      margin: 16px 0;
      font-size: 15px;
      border: 1px solid #eee;
      font-family: 'Noto Serif JP', serif;
    }
    p {
      font-size: 16px;
      letter-spacing: 0em;
      font-family: 'Noto Serif JP', serif;
      font-weight: 400;
      font-style: normal;
      font-size: 15px;
      letter-spacing: .05em;
      line-height: 2em;
      text-transform: none;
      color: rgba(51,51,51,.5);
      margin: 4px 0;
      margin-right: 32px;
    }
    div:nth-child(2){
      margin-top: 100px;
    }
    @media (min-width: 600px){
      flex-direction: row;
      div:nth-child(2){
        margin-top: 0;
      }
    }
  `;

  export const SplitDiv = styled.div`
    width: 100%;
    img {
      margin-bottom: 16px;
    }
    @media (min-width: 600px){
      width: calc(50% - 8px);
    }
  `;
  export const Paralax = styled.div`
    width: 100%;
    height: 550px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  `;

  export const LinkSquare = styled.div`
    width: calc(100vw - 48px);
    height: calc(100vw - 48px);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    @media(min-width: 600px){
      width: calc(50vw - 56px);
      height: calc(50vw - 56px);
    }
    &:hover {
      cursor: pointer;
    }
    &:hover h1 {
      background-color: #ffffff50;
    }
  `;
  export const SquareLink = styled.a`

  `;
  export const LinkText = styled.h1`
    font-family: 'Noto Serif JP', serif;
    font-size: 24px;
    text-align: center;
    color: #333;
    background-color: #ffffff80;
    padding: 12px;
    height: max-content;
    font-weight: 100;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  `;
