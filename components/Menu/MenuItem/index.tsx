import React, { MouseEventHandler, useState, useEffect } from 'react';
import CSS from './menuItem.module.css';

function MenuItem({
  target,
  children }: {
    target: React.RefObject<HTMLElement>,
    children: string | JSX.Element
  }): JSX.Element {
  const [anchorId, setAnchorId] = useState('');
  const updateAnchor = () => {
    if (target.current) {
      setAnchorId(target.current.id);
    }
  };

  useEffect(updateAnchor, [target]);

  const MenuItemClick: MouseEventHandler = event => {
    if (!target.current) {
      return false;
    }
    event.preventDefault();
    target.current.scrollIntoView({ behavior: 'smooth' });
    return false;
  }

  return (
    <li className={CSS.item}>
      <a
        href={`#${anchorId}`}
        className={CSS.anchor}
        onClick={MenuItemClick}>
        {children}
      </a>
    </li>
  )
}

export default MenuItem;