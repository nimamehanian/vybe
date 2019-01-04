import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  $charcoal,
  $text
} from 'styles/colors';
import data from './data';

const LocationsContainer = styled.div`
  max-width: 1100px;
  margin: 0px auto;
`;

const Header = styled.div`
  font-family: 'Brandon Bld';
  text-transform: uppercase;
  font-size: 24px;
  margin: 24px 0px;
  color: ${$charcoal};
  display: flex;
  justify-content: center;
`;

const LocationsList = styled.div``;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Location = styled.div(({ image, flexGrow, isEnabled }) => ({
  '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
  background: `${isEnabled ? `url(${image}) 86% 20%` : $text}`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  borderRadius: '4px',
  minHeight: '300px',
  minWidth: '330px',
  width: '330px',
  margin: '0px 8px 16px',
  position: 'relative',
  boxShadow: '0 2px 5px 0 rgba(0, 0, 0, .2)',
  transition: 'box-shadow 200ms ease',
  cursor: `${isEnabled ? 'pointer' : 'not-allowed'}`,
  flex: `${flexGrow} 0 auto`,
  filter: `brightness(${isEnabled ? 100 : 60}%)`,
  '&:hover': {
    boxShadow: '0 10px 20px 0 rgba(0, 0, 0, .2)',
    filter: `brightness(${isEnabled ? 106 : 60}%)`,
  },
  '& a': {
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  },
}));

const Text = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  text-align: right;
`;

const Title = styled.div`
  color: #fff;
  font-family: 'Brandon Reg';
  font-size: 40px;
  margin: 24px 24px 0px;
`;

const Lock = styled.div`
  color: #fff;
  font-family: 'Brandon Lte';
  font-size: 24px;
  margin: 0px 24px 24px 0px;
`;

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick() {
    console.log('SF');
  }

  render() {
    return (
      <LocationsContainer>
        <Header>locations</Header>
        <LocationsList>
          {
            data.map((row, idx) => (
              <Row key={`row_${idx + 1}`}>
                {row.map(({
                  city,
                  image,
                  route,
                  flexGrow,
                  isEnabled,
                }, i) => (
                  <Location
                    key={`location_${i + 1}`}
                    image={image}
                    flexGrow={flexGrow}
                    isEnabled={isEnabled}
                  >
                    <Link to={route}>
                      <Text>
                        <Title>{city}</Title>
                        <Lock>{!isEnabled ? 'coming soon' : null}</Lock>
                      </Text>
                    </Link>
                  </Location>
                ))}
              </Row>
            ))
          }
        </LocationsList>
      </LocationsContainer>
    );
  }
}

export default Locations;
