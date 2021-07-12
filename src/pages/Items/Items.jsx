import React from 'react';
import { motion } from 'framer-motion';
import * as S from './styled';
import Banner from './components/Banner/Banner';
import ProductList from '../../components/common/ProductList/ProductList';
import { Container } from '../../components/ui/styled';
import ProductGrid from '../../components/common/ProductGrid/ProductGrid';

function Items({ products }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Banner />
      <Container>
        <section>
          <S.SubTitle>Experts rated today</S.SubTitle>
          <ProductGrid cards={products} />
        </section>
        <section>
          <S.SubTitle>Explore</S.SubTitle>
          <ProductList slider={{ overflow: true }} cards={products} />
        </section>
      </Container>
    </motion.div>
  );
}

Items.getInitialProps = async () => {
  const [products = []] = await Promise.all([
    (async () => {
      // eslint-disable-next-line no-undef
      const response = await fetch(`${process.env.BASIC_HOST}/tmp/products.json`);

      if (response.ok) {
        return await response.json();
      } else {
        console.log("Ошибка HTTP: " + response.status);
      }
    })(),
  ]);
  return {
    products,
  };
};

export default Items;
