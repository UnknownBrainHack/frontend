import React from 'react';
import PropTypes from 'prop-types';
import { Label, StyledTextarea, Title } from './styled';

export default function Textarea({ title, onChange, value, placeholder }) {
  return (
    <Label>
      {title && <Title className="textarea__label">{title}</Title>}
      <StyledTextarea
        className="textarea__input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Label>
  );
}

Textarea.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
