import React from 'react';
import PropTypes from 'prop-types';

export default function TextArea({ title, onChange, value, placeholder }) {
  return (
    <label className="textarea__wrapper">
      {title && <span className="textarea__label">{title}</span>}
      <textarea
        className="textarea__input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}

TextArea.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
