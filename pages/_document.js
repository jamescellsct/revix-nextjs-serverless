import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import {globalStyles} from '../components/styles';
import PropTypes from 'prop-types';
import {
    RevixContainer
} from './_document.styles';
import BgAnimation from "../components/common/bg-animation";

export default class MyDocument extends Document {
    static getInitialProps({renderPage}) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        );
        const styleTags = sheet.getStyleElement();
        return {...page, styleTags};
    }

    render() {
        return (
            <html>
            <Head>
                <meta charSet="utf-8"/>
                <link rel="icon" href="/favicon.ico"/>
                {this.props.styleTags}
                <style dangerouslySetInnerHTML={{__html: globalStyles}}/>
            </Head>
            <body>
            <BgAnimation/>
            <RevixContainer>
                <Main/>
                <NextScript/>
            </RevixContainer>
            </body>
            </html>
        );
    }
}
