import '../styles/main.scss';
import 'swiper/swiper.scss';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'swiper/components/scrollbar/scrollbar.scss';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import Layout from '../src/components/common/Layout/Layout';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </Layout>
  );
}

export default MyApp;
