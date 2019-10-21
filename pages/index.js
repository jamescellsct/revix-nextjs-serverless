import React, { Component } from 'react';
import Revix, { ThemeProvider } from '@theme';
import MainLayout from '../layouts';
import Home from '@components/Home';

class App extends Component {
  static async getInitialProps({ query }) {
    return { pageParams: query };
  }

  render() {
    return (
      <ThemeProvider theme={Revix}>
        <MainLayout>
          <Home pageParams={this.props.pageParams} />
        </MainLayout>
      </ThemeProvider>
    );
  }
}

export default App;
