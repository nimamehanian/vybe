import React, { Component } from 'react';
import styled from 'styled-components';
import {
  $charcoal,
  $peach,
  $text,
  $note
} from 'styles/colors';
import data from './data';

const AmenitiesContainer = styled.div`
  max-width: 1100px;
  margin: 0px auto;
`;

const Header = styled.div`
  font-family: 'Brandon Bld';
  text-transform: uppercase;
  font-size: 24px;
  margin: 24px 0px 8px;
  color: ${$charcoal};
  display: flex;
  justify-content: center;
`;

const AmenitiesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px 12px;
  flex: 0 0 33%;
`;

const Amenity = styled.div`
  max-width: 330px;
  min-width: 330px;
  background: #fff;
  border-radius: 4px 10px 10px 4px;
  margin: 12px;
  position: relative;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .2);
  transition: box-shadow 200ms ease;
  &:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .2);
    filter: brightness(102%);
  }
`;

const AmenityImage = styled.div(props => ({
  borderRadius: '4px 10px 0px 0px',
  height: '220px',
  background: `url(${props.background}) 50% 75%`,
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
  width: '100%',
}));

const AmenityText = styled.div`
  height: 200px;
  padding: 0px 24px 16px;
  position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-family: 'Brandon Med';
  margin: 12px 0px 8px;
  color: ${$charcoal};
`;

const Description = styled.div`
  font-size: 16px;
  font-family: 'Lato Reg';
  margin-bottom: 8px;
  color: ${$text};
`;

const Note = styled.div`
  font-size: 12px;
  font-family: 'Lato Ita';
  color: ${$note};
  border-left: 2px solid ${$peach}62;
  padding-left: 6px;
  height: 30px;
  max-width: 282px;
  position: absolute;
  bottom: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconCircle = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 100%;
  box-shadow:
    0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0 1px 18px 0 rgba(0, 0, 0, 0.12);
  background: #fff;
  position: absolute;
  right: 16px;
  top: 188px;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 64%;
  }
`;

class Amenities extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AmenitiesContainer>
        <Header>the setup</Header>
        <AmenitiesList>
          {data.map((entry, idx) => (
            <Amenity key={`amenity_${idx + 1}`}>
              <IconCircle><img src={entry.icon} alt="" /></IconCircle>
              <AmenityImage background={entry.image} />
              <AmenityText>
                <Title>{entry.title}</Title>
                <Description>
                  {entry.desc.constructor.name === 'String' ? entry.desc
                    : entry.desc.map((frag, i) => <span key={`desc_frag_${i + 1}`}>{frag}</span>)}
                </Description>
                {entry.note.length ? <Note>{entry.note}</Note> : null}
              </AmenityText>
            </Amenity>
          ))}
        </AmenitiesList>
      </AmenitiesContainer>
    );
  }
}

export default Amenities;
