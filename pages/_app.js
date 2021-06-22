/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import '../styles/main.scss';

import Header from '../src/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
