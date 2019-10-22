import React from 'react';
import Link from 'next/link';
import { Content } from '@styles';
import SharedHeader from '@components/common/header/SharedHeader';
import RevixCursor from '@components/common/RevixCursor/RevixCursor';
import RevixGridLayout from '../components/common/GridLayout';

const MainLayout = ({ children }) => {
  return (
    <RevixGridLayout>
      <RevixCursor />
        <SharedHeader />
      <Content>{children}</Content>
    </RevixGridLayout>
  );
};

export default MainLayout;
