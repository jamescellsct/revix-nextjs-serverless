import React from 'react';
import { HeaderContainer } from './SharedHeader.styles';
import { Flex, Box } from 'reflexbox/styled-components';
import HeaderNav from './HeaderNav/HeaderNav';
const brandLogo = '/static/images/logo.svg';

const SharedHeader = () => {
  return (
      <Flex
        sx={{
          minWidth: 1240,
          maxWidth: 12,
          mx: 'auto'
        }}
      >
        <Box width={'1165 px'} px={0}>
          <HeaderContainer>
            <Flex
              sx={{
                minWidth: 1400,
                maxWidth: 1960,
                minHeight: 100,
                maxHeight: 100,
                color: 'primary',
                mx: 'auto'
              }}
            >
              <Box width={1 / 4} pl={96} pt={36}>
                <img src={brandLogo} />
              </Box>
              <Box width={3 / 4} px={2}>
                <HeaderNav />
              </Box>
            </Flex>
          </HeaderContainer>
        </Box>
      </Flex>
  );
};

export default SharedHeader;
