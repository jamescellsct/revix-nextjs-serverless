import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../util/apollo-client';

class RevixApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
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
