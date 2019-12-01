import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import { initStore } from '../store';

import { GlobalStyle } from '../styleConstants/common';

const theme = {
  colors: { primary: '#0070f3' },
  weights: { bold: 500, bolder: 600, boldest: 700 }
};

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode)
        jssStyles.parentNode.removeChild(jssStyles);
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Normalize />
            <Component {...pageProps} />
            <GlobalStyle />
          </ThemeProvider>
        </Provider>
      );
    }
  }
);
