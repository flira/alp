import type { NextComponentType, NextPageContext } from 'next';
import React, { ChangeEventHandler, FormEventHandler } from 'react';

export type MDCTextArea<P = {
  eventHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void,
  inputId: string,
  label: string,
  state: string,
  cols?: number,
  ref ?: React.Ref,
  required?: boolean,
  rows?: number
}, IP = P> =
  NextComponentType<NextPageContext, P, IP>;

export type MDCTextInput<P = {
  eventHandler: (event: ChangeEvent<HTMLInputElement>) => void,
  inputId: string,
  label: string,
  state: string,
  ref ?: React.Ref,
  required?: boolean,
  type?: "date" | "datetime-local" | "email" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week";
}, IP = P> =
  NextComponentType<NextPageContext, P, IP>;