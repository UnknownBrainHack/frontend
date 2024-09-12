import React, { useState } from 'react';
import cx from 'classnames';
import { TabsContainer, TabsWrapper } from "./styled";
export default function Tabs({ children }) {
  const items = Array.isArray(children) ? children : [children];
  const [selected, setSelected] = useState(0);

  return (
    <TabsWrapper className="tabs">
      <div className="tabs__header">
        {items.map((item, i) => (
          <button
            className={cx('tabs__header-button', { active: selected === i })}
            key={i}
            onClick={() => setSelected(i)}
          >
            {item?.props.title}
          </button>
        ))}
      </div>
      {items.map((item, i) => (selected === i && <TabsContainer className="tabs__items">{item}</TabsContainer>)
      )}
    </TabsWrapper>
  );
}
