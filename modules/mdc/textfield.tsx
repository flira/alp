import { MDCTextArea, MDCTextInput } from '../../types/mdc';
import { MDCTextField } from '@material/textfield';
import React, { useEffect } from 'react';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/textfield/dist/mdc.textfield.css';
import CSS from '../../styles/mdc/textfield.module.css';

const TextArea: MDCTextArea =
  ({ eventHandler, inputId, label, state, cols, rows }) => {
    const elRef: React.RefObject<HTMLLabelElement> = React.createRef();
    const effect: () => void = () => {
      new MDCTextField(elRef.current as HTMLLabelElement);
    };

    useEffect(effect);

    return (
      <label
        className={`mdc-text-field mdc-text-field--filled mdc-text-field--textarea ${CSS.label}`}
        ref={elRef}>
        <span className="mdc-text-field__ripple" />
        <span
          className="mdc-floating-label"
          id={`${inputId}-label`}>
          {label}
        </span>
        <span className="mdc-text-field__resizer">
          <textarea
            className={`mdc-text-field__input ${CSS.input}`}
            id={inputId}
            rows={rows ? rows : 8}
            cols={cols ? cols : 40}
            onChange={eventHandler}
            value={state}
            aria-label={label} />
        </span>
        <span className="mdc-line-ripple" />
      </label>
    )
  };

const TextInput: MDCTextInput =
  ({ eventHandler, inputId, label, state, type }) => {
    const elRef: React.RefObject<HTMLLabelElement> = React.createRef();
    const createMDCInstance: () => void = () => {
      new MDCTextField(elRef.current as HTMLLabelElement);
    };

    useEffect(createMDCInstance);

    return (
      <label
        className={`mdc-text-field mdc-text-field--filled ${CSS.label}`}
        ref={elRef}>
        <span className="mdc-text-field__ripple" />
        <span
          className="mdc-floating-label"
          id={`${inputId}-label`}>
          {label}
        </span>
        <input
          className={`mdc-text-field__input ${CSS.input}`}
          id={inputId}
          value={state}
          type={type ? type : 'text'}
          aria-labelledby={`${inputId}-label`}
          onChange={eventHandler} />
        <span className="mdc-line-ripple" />
      </label>
    )
  };

export { TextArea, TextInput };