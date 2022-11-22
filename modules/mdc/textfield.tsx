import { MDCTextArea, MDCTextInput } from '../../types/mdc';
import { MDCTextField } from '@material/textfield';
import React, { EventHandler, useEffect } from 'react';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/textfield/dist/mdc.textfield.css';
import CSS from '../../styles/mdc/textfield.module.css';

const defaultHeperTexts: { empty: string, invalid: string } = {
  empty: 'Campo obrigatório',
  invalid: 'Formato inválido'
};

const onChangeValidation: (textField: MDCTextField) => void = textField => {
  if (!textField) {
    return;
  }
  if (textField.required && !textField.value) {
    textField.helperTextContent = defaultHeperTexts.empty;
  } else if (!textField.valid) {
    textField.helperTextContent = defaultHeperTexts.invalid;
  } else {
    textField.helperTextContent = '';
  }
};

const TextArea: MDCTextArea = React.forwardRef((props, inputRef) => {
  const labelRef: React.RefObject<HTMLLabelElement> = React.createRef();
  let textArea: MDCTextField;
  const effect: () => void = () => {
    textArea = new MDCTextField(labelRef.current as HTMLLabelElement);
  };

  const onChange: React.ChangeEventHandler<HTMLTextAreaElement> =
  event => {
    props.eventHandler(event);
    onChangeValidation(textArea);
  }

  useEffect(effect);

  return (
    <>
      <label
        className={`mdc-text-field mdc-text-field--filled mdc-text-field--textarea ${CSS.label}`}
        ref={labelRef}>
        <span className="mdc-text-field__ripple" />
        <span
          className="mdc-floating-label"
          id={`${props.inputId}-label`}>
          {props.label}
        </span>
        <span className="mdc-text-field__resizer">
          <textarea
            className={`mdc-text-field__input ${CSS.input}`}
            id={props.inputId}
            rows={props.rows ? props.rows : 8}
            cols={props.cols ? props.cols : 40}
            onChange={onChange}
            value={props.state}
            required={props.required}
            aria-label={props.label}
            ref={inputRef as React.ForwardedRef<HTMLTextAreaElement>} />
        </span>
        <span className="mdc-line-ripple" />
      </label>
      <div className="mdc-text-field-helper-line">
        <div className="mdc-text-field-helper-text" id="my-helper-id" aria-hidden="true">
          {props.required ? defaultHeperTexts.empty : ''}
        </div>
      </div>
    </>
  )
});

const TextInput: MDCTextInput =
  React.forwardRef((props, inputRef) => {
    const labelRef: React.RefObject<HTMLLabelElement> = React.createRef();
    let textInput: MDCTextField;
    const createMDCInstance: () => void = () => {
      textInput = new MDCTextField(labelRef.current as HTMLLabelElement);
    };

    const changeHandler: React.ChangeEventHandler<HTMLInputElement> =
    event => {
      props.eventHandler(event);
      onChangeValidation(textInput);
    }

    useEffect(createMDCInstance);

    return (
      <>
        <label
          className={`mdc-text-field mdc-text-field--filled ${CSS.label}`}
          ref={labelRef}>
          <span className="mdc-text-field__ripple" />
          <span
            className="mdc-floating-label"
            id={`${props.inputId}-label`}>
            {props.label}
          </span>
          <input
            className={`mdc-text-field__input ${CSS.input}`}
            id={props.inputId}
            value={props.state}
            type={props.hasOwnProperty('type') ? props.type : 'text'}
            required={props.required}
            aria-labelledby={`${props.inputId}-label`}
            onChange={changeHandler}
            ref={inputRef as React.ForwardedRef<HTMLInputElement>} />
          <span className="mdc-line-ripple" />
        </label>
        <div className="mdc-text-field-helper-line">
          <div className="mdc-text-field-helper-text" id="my-helper-id" aria-hidden="true">
            {props.required ? defaultHeperTexts.empty : ''}
          </div>
        </div>
      </>
    )
  });

export { TextArea, TextInput };