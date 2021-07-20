import { motion } from 'framer-motion';
import ProductCard from '../ProductCard/ProductCard';
import { StyledProductGrid, SubTitle } from './styled';

function ProductGrid({ cards, title }) {
  return (
    <div>
      <SubTitle>{title}</SubTitle>
      <StyledProductGrid
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={{
          hidden: {
            transition: {
              staggerChildren: 0.1,
            },
          },
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
            style={{
              maxWidth:"100%",
              minWidth: 0,
            }}
            key={card.title}
          >
            <ProductCard
              variants={{
                hidden: { scale: 1, opacity: 0 },
                show: { scale: 1, opacity: 1 },
              }}
              id={card.id}
              key={card.title}
              title={card.title}
              likes={card.likes}
              rate={card.rate}
              src={card.src}
            />
          </motion.div>
        ))}
      </StyledProductGrid>
    </div>
  );
}

export default ProductGrid;
