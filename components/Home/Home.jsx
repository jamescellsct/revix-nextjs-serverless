import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';
import HomeContainerStickyRoll from '../containers/Home.container.stickyroll';
import Sticky2 from '../containers/Home.container.scrollmagic';

const Home = props => {
  return (
    <div>
      <BrowserView>
        <Sticky2 />
      </BrowserView>
      <MobileView />
    </div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
