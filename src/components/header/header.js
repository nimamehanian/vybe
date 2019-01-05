import React, { Component } from 'react';
import styled from 'styled-components';
import {
} from 'styles/colors';

const HeaderContainer = styled.div`
  color: #ffffff;
  background: #33333300;
  height: 72px;
  font-size: 28px;
  padding: 0px 16px 0px 16px;
  max-width: 1100px;
  margin: 0px auto;
  position: absolute;
  z-index: 3;
  left: 0px;
  right: 0px;
  font-family: 'Glosa Blk';
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HeaderContainer>
          <span>vybe</span>
          <span />
        </HeaderContainer>
      </div>
    );
  }
}

export default Header;
