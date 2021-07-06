import { motion } from 'framer-motion';
import ProductCard from '../ProductCard/ProductCard';
import { StyledProductGrid } from './styled';

function ProductGrid({ cards }) {
  return (
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
          key={card.title}
        >
          <ProductCard
            variants={{
              hidden: { scale: 1, opacity: 0 },
              show: { scale: 1, opacity: 1 },
            }}
            key={card.title}
            title={card.title}
            likes={card.likes}
            rate={card.rate}
          />
        </motion.div>
      ))}
    </StyledProductGrid>
  );
}

export default ProductGrid;
