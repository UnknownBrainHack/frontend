import React from 'react';
import ProductCard from '../../components/common/ProductCard/ProductCard';
import { motion } from 'framer-motion';
import * as S from './styled';
import Banner from './components/Banner/Banner';
import ProductList from '../../components/common/ProductList/ProductList';

export default function Items() {
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
      <section>
        <S.SubTitle>Experts rated today</S.SubTitle>
        <motion.div
          className="items__grid"
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {cards.map((card) => (
            <motion.div
              variants={{
                hidden: { scale: 0.9, opacity: 0 },
                show: { scale: 1, opacity: 1 },
              }}
              key={card.title}
            >
              <ProductCard
                title={card.title}
                likes={card.likes}
                rate={card.rate}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section>
        <S.SubTitle>Explore</S.SubTitle>
        <ProductList cards={cards} />
      </section>
    </motion.div>
  );
}
