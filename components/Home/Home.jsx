import React from 'react';
import PropTypes from 'prop-types';
import {
  HomeWrapper, Content
} from './Home.styles';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const Home = props => {
  return (
    <HomeWrapper>
      <Content>
        <BrowserView>
          <h1> This is rendered only in browser </h1>
        </BrowserView>
        <MobileView>
          <h1> This is rendered only on mobile </h1>
        </MobileView>
      </Content>
    </HomeWrapper>
  );
};

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
