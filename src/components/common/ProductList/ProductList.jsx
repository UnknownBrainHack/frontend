import { motion } from 'framer-motion';
import ProductCard from '../ProductCard/ProductCard';
import Slider from '../Slider/Slider';
import { Arrow, ArrowWrapper, StyledProductList, SubTitle, TitleWrapper } from "./styled";
import ArrowIcon from "../../../images/arrowNew.svg";
function ProductList({ cards, slider, title }) {
  if (slider) {
    return (
      <StyledProductList>
        <TitleWrapper>
          <SubTitle>{title}</SubTitle>
          <ArrowWrapper>
            <Arrow left className="swiper-button-prev-unique">
              <ArrowIcon />
            </Arrow>
            <Arrow className="swiper-button-next-unique">
              <ArrowIcon />
            </Arrow>
          </ArrowWrapper>

        </TitleWrapper>
        <Slider {...slider}>
          {cards.map((card) => (
            <ProductCard
              id={card.id}
              key={card.title}
              title={card.title}
              likes={card.likes}
              rate={card.rate}
              src={card.src}
            />
          ))}
        </Slider>
      </StyledProductList>
    );
  }
  return (
    <StyledProductList>
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
              id={card.id}
              key={card.title}
              title={card.title}
              likes={card.likes}
              rate={card.rate}
              src={card.src}
            />
          </motion.div>
        ))}
      </div>
    </StyledProductList>
  );
}

export default ProductList;
