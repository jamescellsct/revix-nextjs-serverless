import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Flex, Box } from 'reflexbox/styled-components';
import { NavBar, NavbarItem, GetStarted } from './HeaderNav.styles';
const fingerPrint = '/static/images/tmp/fingerprint.png';
const tmpDropdown = '/static/images/tmp/currency-dropdown.png';

const HeaderNav = () => {
  return (
    <Flex
      wrap="nowrap"
      w={1}
      justify="space-between"
      align="flex-end"
      className="RevixNavBar"
      h={80}
    >
      <Box
        width={1}
        display="inline-flex"
        alignItems="center"
        justifyContent="flex-end"
        height={80}
      >
        <NavBar>
          <NavbarItem>Products</NavbarItem>
          <NavbarItem>Company</NavbarItem>
          <NavbarItem>Support</NavbarItem>
        </NavBar>
        <img src={tmpDropdown} />
        <img src={fingerPrint} />
        <NavBar>
          <NavbarItem>Products</NavbarItem>
        </NavBar>
        <GetStarted>Get Started</GetStarted>
      </Box>
    </Flex>
  );
};

export default HeaderNav;
