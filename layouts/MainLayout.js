import React from 'react';
import Link from 'next/link';
import { LayoutContainer, Content } from '@styles';
import SharedHeader from '@components/common/header/SharedHeader';
import Iframe from 'react-iframe';
import RevixCursor from '@components/common/RevixCursor/RevixCursor';

const MainLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <RevixCursor />
      <SharedHeader />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default MainLayout;
