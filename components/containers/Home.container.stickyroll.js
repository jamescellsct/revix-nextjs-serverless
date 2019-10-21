import React from 'react';
import { Stickyroll } from '@stickyroll/stickyroll';

const headlines = [
  'Hello World!',
  'Hello React!',
  'Hello Stickyroll!',
  "Let's continue with the next lesson!"
];

const HomeContainerStickyRoll = () => {
  return (
    <Stickyroll pages={headlines}>
      {({ page, pageIndex, pages, progress }) => {
        return (
          <div>
            <strong>{page}</strong> of <strong>{pages}</strong>
            <br />
            Progress: <strong>{progress}</strong>
            <h1>{headlines[pageIndex]}</h1>
          </div>
        );
      }}
    </Stickyroll>
  );
};

export default HomeContainerStickyRoll;
