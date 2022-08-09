import React, { useEffect } from "react";
import { backgroundProps, ResponsiveBackgroundContent } from "../types";

export default function ResponsiveBackground({
  background, backgroundSrcSet, height, width
}: ResponsiveBackgroundContent): JSX.Element {
  const ref: React.RefObject<HTMLDivElement> = React.createRef();

  const attachShadow = () => {
    if (!ref.current || ref.current.shadowRoot) {
      return;
    }
    const shadow: ShadowRoot = ref.current.attachShadow({ mode: 'open' });
    const docFrag = document.createDocumentFragment();
    docFrag.appendChild(
      Object.assign(document.createElement('style'), {
        textContent: createTextContent({
          background: background,
          backgroundSrcSet: backgroundSrcSet
        })
      }));
    docFrag.appendChild(document.createElement('div'));
    shadow.append(docFrag);
  }

  useEffect(attachShadow);

  return <div ref={ref} style={{
    width: width ? width : '100%',
    height: height ? height : '100%'
  }} />;
}

function createTextContent({
  background,
  backgroundSrcSet
}: ResponsiveBackgroundContent): string {
  return defineProps(background) + defineMediaQueries(backgroundSrcSet);
}

function defineProps(props: backgroundProps | undefined): string {
  if (!props) {
    return '';
  }
  let textContent: string = 'height:100%;width:100%;';
  const defaultBackground: { [key: string]: string | undefined } = {
    'blend-mode': props.blendMode,
    position: 'center',
    repeat: 'no-repeat',
    size: 'cover'
  };
  const _props: backgroundProps =
    Object.assign(defaultBackground, props);
  Object.entries(_props).forEach(([key, entry]) => {
    if (entry) {
      textContent += `background-${key}:${entry};`;
    }
  })
  return `div{${textContent}}`;
}

function defineMediaQueries(queries: string | undefined): string {
  if (!queries) {
    return '';
  }
  const queryArray: string[] = queries
    .replaceAll(/,\s/gi, ',')
    .split(',');
  let textContent: string = '';
  const queryMap: (query: string) => void = query => {
    const values: string[] = query.split(' ');
    const screenSize: string = (parseInt(values[1]) / 2) + "px";
    textContent += `
    @media screen and (min-width: ${screenSize}) {
      div{background-image: url(${values[0]})}
    }
    `
  }
  queryArray.map(queryMap);
  return textContent;
}