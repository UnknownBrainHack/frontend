import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default function Button({ onClick, children, secondary }) {
  return (
    <button className={cx('button', { secondary })} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  secondary: PropTypes.bool,
};
