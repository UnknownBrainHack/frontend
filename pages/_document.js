import Document, { Head, Main, NextScript, Html } from 'next/document';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    return renderPage();
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <div id="portal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
