import React from 'react';
import CardItem from '../components/CardItem';
import { motion } from 'framer-motion';

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
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.2 }}
    >
      <section>
        <div className="items__header">
          <h1>Unknown Brain</h1>
        </div>
      </section>
      <section>
        <h3>Experts rated today</h3>
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
            <CardItem
              variants={{
                hidden: { scale: 0.9, opacity: 0 },
                show: { scale: 1, opacity: 1 },
              }}
              key={card.title}
              title={card.title}
              likes={card.likes}
              rate={card.rate}
            />
          ))}
        </motion.div>
      </section>
      <section>
        <h3>Explore</h3>
        <div
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
            <CardItem
              variants={{
                hidden: { scale: 1, opacity: 0 },
                show: { scale: 1, opacity: 1 },
              }}
              key={card.title}
              title={card.title}
              likes={card.likes}
              rate={card.rate}
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
