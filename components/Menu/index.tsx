import type { NextPage } from 'next';
import type { MouseEventHandler } from 'react';
import CSS from '../../styles/Menu.module.css';

const MenuItem: NextPage<{ anchorId: string }> = ({ anchorId, children }) => {
  const element: HTMLElement | null = document.getElementById(anchorId);
  const MenuItemClick: MouseEventHandler = event => {
    if (!element) {
      return false;
    }
    event.preventDefault();
    element.scrollIntoView({ behavior: 'smooth' });
    return false;
  }

  return (
    <li>
      <a
        className={CSS.anchor}
        href={`#${anchorId}`}
        onClick={MenuItemClick}>
        {children}
      </a>
    </li>
  )
}

const Menu: NextPage = () => (
  <nav>
    <ul className={`${CSS.menu} no-list-style`}>
      <li>
        <a href="/">Logo</a>
      </li>
      <MenuItem anchorId='proposta'>
        Proposta
      </MenuItem>
      <MenuItem anchorId='produtos'>
        Produtos
      </MenuItem>
      <MenuItem anchorId='quem-somos'>
        Quem somos
      </MenuItem>
      <MenuItem anchorId='contato'>
        Contato
      </MenuItem>
    </ul>
  </nav>
);


export default Menu;