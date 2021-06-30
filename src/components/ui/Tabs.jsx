import React, { useState } from 'react';
import cx from 'classnames';
export default function Tabs({ children }) {
  const items = Array.isArray(children) ? children : [children];
  const [selected, setSelected] = useState(0);

  const handleSelection = (i) => {
    setSelected(i);
  };
  return (
    <div className="tabs">
      <div className="tabs__header">
        {items.map((item, i) => (
          <button
            className={cx('tabs__header-button', { active: selected === i })}
            key={i}
            onClick={() => handleSelection(i)}
          >
            {item?.props.title}
          </button>
        ))}
      </div>
      {items.map((item, i) => (
        <div key={i}>
          {selected === i && (
            <div className="tabs__items">
              {item}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
