import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function InputField({
  title,
  onChange,
  value,
  placeholder,
  type = 'text',
  big,
}) {
  return (
    <label className="input__field">
      {title && <span className="input__label">{title}</span>}
      <S.Input
        type={type}
        className="input__input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        big={big}
      />
    </label>
  );
}

InputField.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
