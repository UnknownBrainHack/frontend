import React, { useState } from 'react';
import cx from 'classnames';
export default function Tabs({ children }) {
  const items = Array.isArray(children) ? children : [children];
  console.log('items', items);
  const [selected, setSelected] = useState(0);
  return (
    <div className="tabs__wrapper">
      <div className="tabs__header">
        {items.map((item, i) => (
          <button className={cx('tabs__header-button')} key={i}>
            {item.props.title}
          </button>
        ))}
      </div>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
}
