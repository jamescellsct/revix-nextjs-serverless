import React from 'react';
import { styled } from '@styles';
import { NavBar, NavbarItem, GetStarted } from './HeaderNav.styles';
import { Box } from 'reflexbox/styled-components';
const fingerPrint = '/static/images/tmp/fingerprint.png';
const tmpDropdown = '/static/images/tmp/currency-dropdown.png';

const HeaderNav = () => {
  return (
    <Box width={1} pr={40} pt={36}>
      <NavBar>
        <NavbarItem>Products</NavbarItem>
        <NavbarItem>Company</NavbarItem>
        <NavbarItem>Support</NavbarItem>
      </NavBar>
      <img src={tmpDropdown} />
      <img src-={fingerPrint} />
      <NavBar>
        <NavbarItem>Products</NavbarItem>
      </NavBar>
      <GetStarted>Get Started</GetStarted>
    </Box>
  );
};

export default HeaderNav;
