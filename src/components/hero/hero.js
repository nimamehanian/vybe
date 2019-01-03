import React, { Component } from 'react';
import styled from 'styled-components';
import HeroImage from 'images/hero.jpg';

const HeroContainer = styled.div`
  position: relative;
  min-height: 740px;
  background: no-repeat 75% 50% url(${HeroImage});
  background-size: cover;
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroOverlay = styled.div`
  background: #0005;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 2;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  z-index: 3;
`;

const Headline = styled.div`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
  font-family: 'Brandon Med';
  line-height: 1;
`;

const Subheader = styled.div`
  color: #fff;
  font-size: 22px;
  font-family: 'Lato Reg';
  line-height: 1.5;
`;

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <HeroContainer>
        <HeroOverlay />
        <HeroText>
          <Headline>Coliving that makes living alone the compromise</Headline>
          <Subheader>
            Chic, conscious, community-oriented spaces that define
            the new standard for the artistic, awakened, and entrepreneurial.
          </Subheader>
        </HeroText>
      </HeroContainer>
    );
  }
}

export default Hero;
