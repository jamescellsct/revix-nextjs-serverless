import React from 'react';
import Link from 'next/link';
import { LayoutContainer, Content } from '@styles';
import { Title, LogoWrapper } from './MainLayout.styles';
import SharedHeader from '../components/common/header/SharedHeader';
import Iframe from 'react-iframe';

const MainLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Iframe url="/static/bg-particles/index.html"
        width="100%"
        height="100%"
        display="initial"
        position="fixed"/>

      <SharedHeader />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default MainLayout;
