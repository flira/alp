import { Button, TextArea, TextInput } from '../../modules/mdc';
import React, { FormEvent, useEffect, useState } from 'react';
import type { AlpPage } from '../../types';
import CSS from './contact.module.css';

const Contact: AlpPage = React.forwardRef((props, ref) => {
  const [nome, setNome] = useState({ value: '', isValid: false });
  const [email, setEmail] = useState({ value: '', isValid: false });
  const [mensagem, setMensagem] = useState({ value: '', isValid: false });

  const inputRefs = {
    nome: React.createRef(),
    email: React.createRef(),
    mensagem: React.createRef()
  }

  function changeHandler(
    setter: Function,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setter({
      value: event.target.value,
      isValid: event.target.validity.valid
    });
  }

  function submitHandler(event: React.FormEvent): false {
    event.preventDefault();
    return false;
  }

  return (
    <section
      className={CSS.contact}
      id={props.id}
      ref={ref as React.RefObject<HTMLElement>}>
      <h1>Contato</h1>
      <form
        className={`lim-width ${CSS.form}`}
        onSubmit={submitHandler}
        method="post"
        action="/contact/"
        encType='multipart/form-data'
        data-token="b45ddd287b6fdcc0a4b6660dfdbc4269">
        <TextInput
          inputId="contato-nome"
          label="Nome"
          required={true}
          ref={inputRefs.nome}
          state={nome.value}
          eventHandler={changeHandler.bind(null, setNome)} />
        <TextInput
          inputId="contato-email"
          label="E-mail"
          state={email.value}
          ref={inputRefs.email}
          required={true}
          type="email"
          eventHandler={changeHandler.bind(null, setEmail)} />
        <TextArea
          inputId='contato-mensagem'
          label='Mensagem'
          ref={inputRefs.mensagem}
          required={true}
          state={mensagem.value}
          eventHandler={changeHandler.bind(null, setMensagem)} />
        <div className={CSS.send}>
          <Button
            label='Enviar'
            type='submit' />
        </div>
      </form>
    </section >
  );
});

Contact.displayName = 'Contact';

export default Contact;