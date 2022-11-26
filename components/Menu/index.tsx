import React, { useState, useEffect } from 'react';
import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';

const isSmallScreen: () => boolean =
  () => matchMedia('(max-width: 420px)').matches;

function Menu({ children }: { children: JSX.Element[] }): JSX.Element {
  const [smallScreen, setSmallScreen] = useState(false);
  const updateScreenSize: () => void = () => {
    setSmallScreen(isSmallScreen());
  };

  function responsiveMenu() {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    console.log(smallScreen)
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }

  useEffect(responsiveMenu);

  return smallScreen ?
    <MenuMobile>{children}</MenuMobile> :
    <MenuDesktop>{children}</MenuDesktop>;
}

export default Menu;