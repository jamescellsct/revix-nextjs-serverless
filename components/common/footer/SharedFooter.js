import React from 'react';
import { FooterContainer } from './SharedFooter.styles';
import { Flex, Box } from 'reflexbox/styled-components';
const tmpFooter = '/static/images/tmp/tmp-footer.png';

const SharedFooter = () => {
  return (
    <FooterContainer>
      <Flex
        sx={{
          minWidth: 1165,
          maxWidth: 12,
          mx: 'auto'
        }}
      >
        <Box width={'1165 px'} px={0} mt={30}>
          <img src={tmpFooter} />
        </Box>
      </Flex>
    </FooterContainer>
  );
};

export default SharedFooter;
