import { MDCRipple } from '@material/ripple';
import React, { useEffect } from 'react';
import { MDCButton } from '../../types/mdc';
import '@material/button/dist/mdc.button.css';
import CSS from '../../styles/mdc/button.module.css';

const Button: MDCButton =
  ({ disabled, eventHandler, label, type }) => {
    const elRef: React.RefObject<HTMLButtonElement> = React.createRef();
    const createMDCInstance: () => void = () => {
      new MDCRipple(elRef.current as HTMLButtonElement);
    };

    useEffect(createMDCInstance);

    return (
      <button
        className={`mdc-button mdc-button--raised ${CSS.button}`}
        disabled={typeof disabled !== 'undefined' ? disabled : false}
        onClick={eventHandler}
        type={type ? type : 'button'}
        ref={elRef}>
        <span className="mdc-button__label">
          {label}
        </span>
      </button>
    );
  };

export { Button }