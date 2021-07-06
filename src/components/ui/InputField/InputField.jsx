import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputWrapper, Suggestion, ValueSuggestion } from './styled';

export default function InputField({
  title,
  onChange,
  value,
  placeholder,
  type = 'text',
  big,
  suggestion,
}) {
  return (
    <label className="input__field">
      {title && <span className="input__label">{title}</span>}
      <InputWrapper>
        {suggestion && value.length > 0 && (
          <Suggestion big={big}>
            <ValueSuggestion>{value}</ValueSuggestion>&nbsp;{suggestion}
          </Suggestion>
        )}
        <Input
          type={type}
          className="input__input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          big={big}
        />
      </InputWrapper>
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
