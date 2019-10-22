import React from 'react';
import { Flex, Box } from 'reflexbox/styled-components';
import { Content } from '@styles';

const RevixGridLayout = ({ children }) => {
  return (
    <Flex
      sx={{
        minWidth: 1024,
        maxWidth: 1220,
        mx: 'auto'
      }}
      flexDirection="column"
    >
      <Box width={1} p={0} m={0}>
        <Content>{children}</Content>
      </Box>
    </Flex>
  );
};

export default RevixGridLayout;
