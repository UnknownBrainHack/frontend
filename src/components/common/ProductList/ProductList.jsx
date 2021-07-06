import * as S from './styled';
import { motion } from 'framer-motion';
import ProductCard from '../ProductCard/ProductCard';
import Slider from '../Slider/Slider';

function ProductList({ cards, slider }) {
  if (slider) {
    return (
      <S.StyledProductList>
        <Slider {...slider}>
          {cards.map((card) => (
            <ProductCard
              key={card.title}
              title={card.title}
              likes={card.likes}
              rate={card.rate}
              src={card.src}
            />
          ))}
        </Slider>
      </S.StyledProductList>
    );
  }
  return (
    <S.StyledProductList>
      <div
        className="items__grid"
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
              src={card.src}
            />
          </motion.div>
        ))}
      </div>
    </S.StyledProductList>
  );
}

export default ProductList;
