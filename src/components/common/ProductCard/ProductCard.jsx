import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Background from '../../../images/RussianDragon.png';
import { ImageWrapper, StyledImage, Rating, Description, LikeWrapper, Card, Title, LikeButton } from './styled';
import Like from "../../../images/like.svg";
import {url} from "../../../helpers/url";
export default function ProductCard({ title, rate, likes, src, alt = '', id }) {
  return (
    <Card className="card-item">
      <LikeWrapper likes={likes}>
        <LikeButton onClick={e=>{e.stopPropagation();}} type="button" className="card-item__like-btn">
          <span>{likes}</span>
          <Like />
          {' '}
        </LikeButton>
      </LikeWrapper>
      <Link href={url(`product/${id}`)} passHref>
        <ImageWrapper>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <StyledImage src={src || Background} alt={alt} />
        </ImageWrapper>
      </Link>

      <Link href={url(`product/${id}`)} passHref>
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
