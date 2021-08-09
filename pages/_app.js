import '../styles/main.scss';
import 'swiper/swiper.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Layout from '../src/components/common/Layout/Layout';

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
