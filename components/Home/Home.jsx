import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';
import { Flex, Box } from 'reflexbox/styled-components';
import HomeContainerStickyRoll from '../containers/Home.container.stickyroll';

const Home = props => {
  return (
    <Flex
      sx={{
        mx: 'auto'
      }}
    >
      <Box w={1240} px={0}>
        <BrowserView>
          <HomeContainerStickyRoll />
        </BrowserView>
        <MobileView>
          <h1> This is rendered only on mobile </h1>
        </MobileView>
      </Box>
    </Flex>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
