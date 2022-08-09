import type { NextComponentType, NextPageContext } from 'next';
import { FormEventHandler } from 'react';

export type MDCTextArea<P = {
  eventHandler: React.FormEventHandler<HTMLTextAreaElement>,
  inputId: string,
  label: string,
  state: string,
  cols?: number,
  rows?: number
}, IP = P> =
  NextComponentType<NextPageContext, P, IP>;

export type MDCTextInput<P = {
  eventHandler: React.FormEventHandler<HTMLInputElement>,
  inputId: string,
  label: string,
  state: string,
  type?: "date" | "datetime-local" | "email" | "month" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | "week";
}, IP = P> =
  NextComponentType<NextPageContext, P, IP>;