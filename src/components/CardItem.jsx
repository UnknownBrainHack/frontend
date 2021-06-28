import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

import Background from '../images/RussianDragon.png';

export default function CardItem({ title, rate, likes, src, alt = '' }) {
  return (
    <div className="card-item">
      <Link className="card-item__image" href="/">
        <Image src={src || Background} alt={alt} />
      </Link>
      <h6>{title}</h6>
      <div className="card-item__rating">
        <p>
          Expert rate: <span>{rate}</span>
        </p>
        <button type="button" className="card-item__like-btn">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5957 2.48311C13.7591 1.64427 12.65 1.13229 11.4689 1.03965C10.2877 0.947017 9.11241 1.27983 8.1552 1.97797C7.15096 1.23103 5.90101 0.892329 4.65704 1.03008C3.41308 1.16783 2.26751 1.7718 1.45103 2.72036C0.634547 3.66892 0.207796 4.89162 0.256715 6.14223C0.305633 7.39284 0.826588 8.57846 1.71467 9.46035L6.6161 14.3697C7.02654 14.7736 7.57933 15 8.1552 15C8.73107 15 9.28385 14.7736 9.69429 14.3697L14.5957 9.46035C15.5173 8.53316 16.0345 7.279 16.0345 5.97173C16.0345 4.66447 15.5173 3.41031 14.5957 2.48311ZM13.4828 8.37114L8.58141 13.2726C8.52563 13.3289 8.45925 13.3736 8.38609 13.4041C8.31294 13.4346 8.23446 13.4503 8.1552 13.4503C8.07593 13.4503 7.99746 13.4346 7.9243 13.4041C7.85114 13.3736 7.78476 13.3289 7.72898 13.2726L2.82756 8.34746C2.20857 7.71473 1.86196 6.86478 1.86196 5.97962C1.86196 5.09447 2.20857 4.24451 2.82756 3.61178C3.45831 2.98903 4.30901 2.63984 5.1954 2.63984C6.08178 2.63984 6.93248 2.98903 7.56324 3.61178C7.63661 3.68576 7.72391 3.74448 7.82009 3.78455C7.91627 3.82462 8.01943 3.84525 8.12362 3.84525C8.22782 3.84525 8.33098 3.82462 8.42716 3.78455C8.52334 3.74448 8.61064 3.68576 8.68401 3.61178C9.31477 2.98903 10.1655 2.63984 11.0519 2.63984C11.9382 2.63984 12.7889 2.98903 13.4197 3.61178C14.0472 4.23622 14.4052 5.08157 14.417 5.96675C14.4288 6.85192 14.0935 7.70652 13.4828 8.34746V8.37114Z"
              fill="#8B8B8B"
              stroke="#8B8B8B"
              strokeWidth="0.5"
            />
          </svg>{' '}
          <span>{likes}</span>
        </button>
      </div>
    </div>
  );
}

CardItem.propTypes = {
  title: PropTypes.string,
  rate: PropTypes.number,
  likes: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
};
