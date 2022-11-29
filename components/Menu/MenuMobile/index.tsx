import React, { useState } from 'react';
import MenuLogo from '../MenuLogo';
import ToggleButton from './ToggleButton';
import CSS from './menuMobile.module.css';

function MenuMobile({ children }: { children: JSX.Element[] }): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  function buttonClick(event: React.MouseEvent) {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={isOpen ? CSS.show : ''}>
      <div className={CSS.menu}>
        <MenuLogo />
        <ToggleButton
          isOpen={isOpen}
          width="28px"
          action={buttonClick}>Abrir</ToggleButton>
      </div>
      <div className={CSS.background} onClick={buttonClick}>
        <ul className={`${CSS.list} no-list-style`}>
          {children}
        </ul>
      </div>
    </nav>
  );
}

export default MenuMobile;