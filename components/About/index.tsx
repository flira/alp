import { AlpAboutContent, AlpPage } from '../../types';
import React from 'react';
import * as css from './about.module.css';

const aboutMap: (content: AlpAboutContent) => JSX.Element =
  ({ paragraph }) => (
    <p key={encodeURI(paragraph.substring(0, 7))}>
      {paragraph}
    </p>
  );

const About: AlpPage = React.forwardRef(({ content, id }, ref) => (
  <section
    className={`${css.default.about} has-top-triangle`}
    id={id}
    ref={ref as React.RefObject<HTMLElement>}>
    <h1>Proposta</h1>
    <article className={`lim-width ${css.default.content}`}>
      {(content as AlpAboutContent[]).map(aboutMap)}
    </article>
  </section>
));

About.displayName = 'About';

export default About;