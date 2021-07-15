import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Inner,
  Input,
  List,
  ListItem,
  Title,
  DefaultSelect,
} from "./styled";

const Select = ({
  items,
  value,
  height,
  title,
  simple,
  disabled,
  onChange,
  placeholder,
  type,
  optionPostfix,
  onPostfixClick,
  autoSize,
  dropdownWidth,
}) => {
  const [opened, setOpened] = useState(false);
  const innerRef = useRef();
  const [defaultSelect, setDefaultSelect] = useState(
    type === "default" && true
  );
  const [selectedIndex, updateSelectedIndex] = useState(
    value ? items.findIndex(el => el.value === value) : 0
  );
  const listRef = useRef(null);

  function setSelect() {
    if (type) return;

    setDefaultSelect(false);
  }

  useEffect(() => {
    setSelect();

    window.addEventListener("resize", setSelect);

    return () => {
      window.removeEventListener("resize", setSelect);
    };
  }, []);

  useEffect(() => {
    const clickOutside = e => {
      if (!innerRef.current.contains(e.target)) {
        setOpened(false);
      }
    };

    if (opened) {
      window.addEventListener("click", clickOutside);
    } else {
      window.removeEventListener("click", clickOutside);
    }
    return () => {
      window.removeEventListener("click", clickOutside);
    };
  }, [opened]);


  useEffect(() => {
    if (opened && !defaultSelect) {
      listRef.current.focus();
    }
  }, [opened]);

  function toggle(event, el) {
    if (el === "input") {
      setOpened(!opened);
      event.target.blur();
    }
    if (el === "list" && opened && event?.relatedTarget?.tagName !== "INPUT") {
      setOpened(false);
    }
  }

  function onKeyPress(event) {
    if (event.code === "ArrowDown") {
      if (selectedIndex < items.length - 1) {
        updateSelectedIndex(selectedIndex + 1);
      }
    }

    if (event.code === "ArrowUp") {
      if (selectedIndex > 0) {
        updateSelectedIndex(selectedIndex - 1);
      }
    }

    if (event.code === "Enter") {
      onChange && onChange(items[selectedIndex].value);
      listRef.current.blur();
    }
  }

  function onSelectItem() {
    onChange && onChange(items[selectedIndex].value);
    listRef.current.blur();
  }

  function onChangeDefault(event) {
    updateSelectedIndex(items.findIndex(el => el.value === event.target.value));
    onChange && onChange(event.target.value);
  }

  function onPostfixSelect(event) {
    onPostfixClick && onPostfixClick(event, items[selectedIndex].value);
  }

  const label =
    placeholder && !value
      ? placeholder
      : items.find(el => el.value === value).label;

  const CustomElement = (
    <Input
      role="label"
      size={autoSize ? (label || "").length : 0}
      simple={simple}
      big={title}
      disabled={disabled}
      onFocus={event => {
        toggle(event, "input");
      }}
      opened={opened}
    >
      {label}
    </Input>
  );

  const DefaultElement = (
    <DefaultSelect
      as="select"
      simple={simple}
      big={title}
      disabled={disabled}
      onChange={onChangeDefault}
      onFocus={() => setOpened(true)}
      onBlur={() => setOpened(false)}
      defaultValue={value ? items[selectedIndex].value : "default"}
    >
      {placeholder && !value && (
        <option disabled value="default">
          {placeholder}
        </option>
      )}

      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </DefaultSelect>
  );

  const isDefaultVisible = type === "default" || (!type && defaultSelect);
  const isCustomVisible = type === "custom" || (!type && !defaultSelect);

  return (
    <Wrapper simple={simple}>
      {title && <Title>{title}</Title>}
      <Inner opened={opened} simple={simple} big={title} ref={innerRef}>
        {isDefaultVisible && DefaultElement}
        {isCustomVisible && CustomElement}

        {/*<ChevronDown />*/}

        {(type === "custom" || (!type && !defaultSelect)) && (
          <List
            role="listbox"
            ref={listRef}
            height={height}
            tabIndex={0}
            opened={opened}
            autoSize={autoSize}
            width={dropdownWidth}
            onBlur={() => {
              setTimeout(() => {
                setOpened(false);
              }, 100);
            }}
            onKeyDown={onKeyPress}
          >
            {items.map((el, index) => (
              <ListItem
                key={el.value}
                active={index === selectedIndex}
                role="option"
                aria-selected={index === selectedIndex}
                onMouseEnter={() => updateSelectedIndex(index)}
                onClick={onSelectItem}
              >
                {el.label}

                {optionPostfix &&
                  React.cloneElement(optionPostfix, {
                    onClick: onPostfixSelect,
                  })}
              </ListItem>
            ))}
          </List>
        )}
      </Inner>
    </Wrapper>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  height: PropTypes.number,
  autoscroll: PropTypes.bool,
  title: PropTypes.string,
  simple: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["default", "custom"]),
  placeholder: PropTypes.string,
  autoSize: PropTypes.bool,
  onChange: PropTypes.func,
  optionPostfix: PropTypes.node,
  onPostfixClick: PropTypes.func,
  dropdownWidth: PropTypes.number,
};

export default Select;
