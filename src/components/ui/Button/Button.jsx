import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

export default function Button({ onClick, children, simple, secondary }) {
  return (
    <StyledButton simple={simple} onClick={onClick} secondary={secondary}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  secondary: PropTypes.bool,
  simple: PropTypes.bool,
};
