import React, { Component } from 'react';
import styled from 'styled-components';
import {
  $charcoal,
  $cream
} from 'styles/colors';
import love from 'images/favicon.png';

const FooterContainer = styled.div`
  max-width: 1100px;
  margin: 0px auto;
`;

const FooterContent = styled.div`
  background: ${$charcoal};
  color: ${$cream};
  height: 72px;
  line-height: 4;
  font-size: 18px;
  font-family: 'Brandon Reg';
  letter-spacing: 0.5px;
  text-align: center;
  & img {
    height: 18px;
    margin: 0px 6px;
    position: relative;
    top: 3px;
  }
`;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FooterContent>
        <FooterContainer>
          Being made with
          <img src={love} alt="" />
          in SF.
          © 2019 Vybe
        </FooterContainer>
      </FooterContent>
    );
  }
}

export default Footer;
