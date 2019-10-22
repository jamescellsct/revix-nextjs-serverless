import React from 'react';
import Link from 'next/link';
import { Content } from '@styles';
import SharedHeader from '@components/common/header/SharedHeader';
import RevixCursor from '@components/common/RevixCursor/RevixCursor';
import RevixGridLayout from '../components/common/GridLayout';
import Iframe from 'react-iframe'

const MainLayout = ({ children }) => {
  return (
    <RevixGridLayout>
      <RevixCursor />
      <SharedHeader />
      <Content>{children}</Content>
      <Iframe
        url="/static/bg-ani/index.html"
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="fixed"
      />
    </RevixGridLayout>
  );
};

export default MainLayout;
