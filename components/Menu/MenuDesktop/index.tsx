import React from 'react';
import MenuLogo from '../MenuLogo';
import CSS from './menuDesktop.module.css';

function MenuDesktop ({ children }: { children: JSX.Element[] }): JSX.Element {
  return (
  <nav className={CSS.nav}>
    <MenuLogo />
    <ul className={`${CSS.list} no-list-style`}>
      {children}
    </ul>
  </nav>)
}

export default MenuDesktop;