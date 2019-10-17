import React from 'react';
import * as Sentry from '@sentry/browser';
import App from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../util/apollo-client';

Sentry.init({dsn: "https://ea4ca38afe3c4ab882618ba27d1b3111@sentry.io/1783213"});

class RevixApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Head>
          <title>Revix Next.JS Boilerplate</title>
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withData(RevixApp);
