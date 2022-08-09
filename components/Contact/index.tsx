import { Button, TextArea, TextInput } from '../../modules/mdc';
import React, { FormEvent, useState } from 'react';
import type { AlpPage } from '../../types';
import CSS from './contact.module.css';

function changeHandler(setter: Function, event: FormEvent,) {
  setter((event.target as HTMLInputElement).value);
}

const Contact: AlpPage = React.forwardRef((props, ref) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <section
      className={CSS.contact}
      id={props.id}
      ref={ref as React.RefObject<HTMLElement>}>
      <h1>Contato</h1>
      <form
        className={`lim-width ${CSS.form}`}
        method="post"
        action="/contact/"
        encType='multipart/form-data'
        data-token="b45ddd287b6fdcc0a4b6660dfdbc4269"
        noValidate>
        <TextInput
          inputId="contato-nome"
          label="Nome"
          state={nome}
          eventHandler={changeHandler.bind(null, setNome)} />
        <TextInput
          inputId="contato-email"
          label="E-mail"
          state={email}
          type="email"
          eventHandler={changeHandler.bind(null, setEmail)} />
        <TextArea
          inputId='contato-mensagem'
          label='Mensagem'
          state={mensagem}
          eventHandler={changeHandler.bind(null, setMensagem)} />
        <div className={CSS.send}>
          <Button
            label='Enviar'
            type='submit'/>
        </div>
      </form>
    </section >
  );
});

Contact.displayName = 'Contact';

export default Contact;