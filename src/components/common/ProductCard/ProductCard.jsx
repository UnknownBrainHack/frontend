import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Background from '../../../images/RussianDragon.png';
import { ImageWrapper, StyledImage, Rating, Description, LikeWrapper, Card, Title, LikeButton } from './styled';

export default function ProductCard({ title, rate, likes, src, alt = '', id }) {
  return (
    <Card className="card-item">
      <LikeWrapper likes={likes}>
        <LikeButton onClick={e=>{e.stopPropagation();}} type="button" className="card-item__like-btn">
          <span>{likes}</span>
          <svg
            width="18"
            height="16"
            viewBox="-1 -1 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5957 2.48311C13.7591 1.64427 12.65 1.13229 11.4689 1.03965C10.2877 0.947017 9.11241 1.27983 8.1552 1.97797C7.15096 1.23103 5.90101 0.892329 4.65704 1.03008C3.41308 1.16783 2.26751 1.7718 1.45103 2.72036C0.634547 3.66892 0.207796 4.89162 0.256715 6.14223C0.305633 7.39284 0.826588 8.57846 1.71467 9.46035L6.6161 14.3697C7.02654 14.7736 7.57933 15 8.1552 15C8.73107 15 9.28385 14.7736 9.69429 14.3697L14.5957 9.46035C15.5173 8.53316 16.0345 7.279 16.0345 5.97173C16.0345 4.66447 15.5173 3.41031 14.5957 2.48311ZM13.4828"
              stroke="#8B8B8B"
              strokeWidth="2"
            />
          </svg>{' '}
        </LikeButton>
      </LikeWrapper>
      <Link href={`/product/${id}`} passHref>
        <ImageWrapper>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <StyledImage src={src || Background} alt={alt} />
        </ImageWrapper>
      </Link>

      <Link href={`/product/${id}`} passHref>
        <Title>{title}</Title>
      </Link>
      <Rating className="card-item__rating">
        <Description>
            Expert rate: <span>{rate}&nbsp;ETH</span>
        </Description>
      </Rating>
    </Card>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  rate: PropTypes.number,
  likes: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  variants: PropTypes.object,
};
