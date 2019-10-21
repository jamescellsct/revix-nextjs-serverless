import React from 'react';
import { styled } from '@styles';
import {
  FooterContainer
} from './SharedHeader.styles';
import { Flex, Box } from 'reflexbox/styled-components';
const brandLogo = '/static/images/logo.svg';
tmpFooterImg = '/static/images/tmp/tmp-footer.png';

const SharedFooter = () => {
  return (
    <Flex sx={{
      minWidth: 1165,
      maxWidth: 12,
      mx: 'auto',
    }}>
      <Box width={'1165 px'} px={0} mt={30}>
        <imgc src={tmpFooterImg} />
      </Box>
    </Flex>
  );
};

export default SharedFooter;
