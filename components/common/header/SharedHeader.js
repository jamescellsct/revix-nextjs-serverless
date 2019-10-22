import React from 'react';
import { Flex, Box } from 'reflexbox/styled-components';
import HeaderNav from './HeaderNav/HeaderNav';
const brandLogo = '/static/images/logo.svg';

const SharedHeader = () => {
  return (
    <Flex bg='#fff'>
      <Box width={1 / 4} pl={0} pt={36}>
        <img src={brandLogo} />
      </Box>
      <Box width={3 / 4} px={2}>
        <HeaderNav />
      </Box>
    </Flex>
  );
};

export default SharedHeader;
