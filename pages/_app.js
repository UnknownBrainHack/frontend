/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import '../styles/main.scss';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Layout from '../src/components/common/Layout';

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </Layout>
  );
}

export default MyApp;
