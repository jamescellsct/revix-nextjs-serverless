import React from 'react';
import { styled } from '@styles';
import {
  HeaderContainer
} from './SharedHeader.styles';
import { Flex, Box } from 'reflexbox/styled-components';
import Headroom from 'react-headroom'
const brandLogo = '/static/images/logo.svg';

const SharedHeader = () => {
  return (
    <Headroom>
  <HeaderContainer>
    <Flex sx={{
        minWidth: 1280,
        maxWidth: 1960,
        mx: 'auto',
      }}>
      <Box width={1/4} px={2}>
        <p>test</p>
      </Box>
      <Box width={3/4} px={2}>
        ß<p>test</p>
      </Box>
    </Flex>
  </HeaderContainer>
  </Headroom>
  );
};

export default SharedHeader;
