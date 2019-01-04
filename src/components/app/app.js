import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import Header from 'components/header/header';
import Hero from 'components/hero/hero';
import Amenities from 'components/amenities/amenities';
import Locations from 'components/locations/locations';

import GlobalStyles from 'styles/global';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // window.Intercom('boot', { app_id: 'iw7gkpn2' });
  }

  render() {
    return (
      <div>
        <GlobalStyles />
        <Header />
        <Hero />
        <Amenities />
        <Locations />
        {/* <Switch> */}
        {/* <Route exact path="/pathA" component={CompA} /> */}
        {/* <Route exact path="/pathB" component={CompB} /> */}
        {/* </Switch> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default hot(module)(App);
