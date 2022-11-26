import React, { MouseEventHandler } from 'react';
import CSS from './menuLogo.module.css';

const logoClick: MouseEventHandler = () => {
  scrollTo({ top: 0, behavior: 'smooth' });
  return false;
};

function MenuLogo(): JSX.Element {
  return (
    <div className={CSS.logo} onClick={logoClick}>
      <span className='accessible-label'>ALP</span>
    </div>);
}

export default MenuLogo;