import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as Sentry from '@sentry/browser';
import { ServerStyleSheet } from 'styled-components';
import { globalStyles } from '../components/styles';
// import SmoothScroll from '../components/common/SmoothScroll';
import PropTypes from 'prop-types';

process.on('uncaughtException', err => {
  Sentry.captureException(err);
});

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
