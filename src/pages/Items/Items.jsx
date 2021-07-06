import React from 'react';
import { motion } from 'framer-motion';
import * as S from './styled';
import Banner from './components/Banner/Banner';
import ProductList from '../../components/common/ProductList/ProductList';
import { Container } from '../../components/ui/styled';
import ProductGrid from '../../components/common/ProductGrid/ProductGrid';

function Items({ products }) {
  console.log('products', products);
  const cards = [
    { title: 'Hey there', rate: 0.34, likes: 121 },
    { title: 'Hello, mate', rate: 0.11, likes: 41 },
    { title: 'Hi, friend', rate: 0.77, likes: 328 },
    { title: 'Good afternoon, pal', rate: 1.15, likes: 141 },
    { title: 'Aye-aye', rate: 0.54, likes: 451 },
    { title: 'Sup, g', rate: 0.18, likes: 46 },
  ];
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
          <ProductGrid cards={cards} />
        </section>
        <section>
          <S.SubTitle>Explore</S.SubTitle>
          <ProductList slider={{ overflow: true }} cards={cards} />
        </section>
      </Container>
    </motion.div>
  );
}

Items.getInitialProps = async () => {
  const [products = []] = await Promise.all([
    (async () => {
      const data = await fetch(`http://localhost:3000/tmp/products.json`);
      return data.json();
    })(),
  ]);
  return {
    products,
  };
};

export default Items;
