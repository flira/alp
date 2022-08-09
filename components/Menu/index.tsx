import { MouseEventHandler, useState, useEffect } from 'react';
import React from 'react';
import CSS from './menu.module.css';

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
    <li>
      <a
        href={`#${anchorId}`}
        className={CSS.anchor}
        onClick={MenuItemClick}>
        {children}
      </a>
    </li>
  )
}

const logoClick: MouseEventHandler = () => {
  scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

function Menu({ children }: { children: JSX.Element[] }): JSX.Element {
  return (
    <nav>
      <ul className={`${CSS.menu} no-list-style`}>
        <li>
          <div className={CSS.logo} onClick={logoClick}>
            <span className='accessible-label'>ALP</span>
          </div>
        </li>
        {children}
      </ul>
    </nav>
  );
}

export default Menu;
export { MenuItem };