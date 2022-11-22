import type { AlpPage, AlpPartnerContent } from "../../types";
import React from "react";
import Image from "next/image";
import CSS from './partner.module.css';

function Partner({
  bio,
  linkedin,
  name,
  photo }: AlpPartnerContent): JSX.Element {
  return (
    <div className={`card ${CSS.partner}`}>
      <article>
        <header className={CSS.header}>
          {photo ?
            <div className={CSS.photoEncap}>
              <Image
                className={CSS.photo}
                alt={photo.alt}
                layout='fill'
                src={photo.url} />
            </div> : ''}
          <div className={CSS.network}>
            <h2 className={CSS.name}>{name}</h2>
            {linkedin ?
              <div className={CSS.linkedin}>
                <a
                  className={CSS.anchor}
                  href={linkedin}
                  target='_blank'
                  rel="noreferrer">
                  <span className={CSS.linkedinIcon} />
                  <span className='accessible-label'>
                    {linkedin}+
                  </span>
                </a>
              </div> : ''}
          </div>
        </header>
        <p className={CSS.content}>
          {bio}
        </p>
      </article>
    </div>
  );
}

const partnerMap: (props: AlpPartnerContent) => JSX.Element =
  ({ bio, linkedin, name, photo }) => (
    <li key={encodeURI(name)}>
      <Partner
        bio={bio}
        linkedin={linkedin}
        name={name}
        photo={photo} />
    </li>
  );

const Partners: AlpPage = React.forwardRef((props, ref) => (
  <section
    id={props.id}
    className="lim-width"
    ref={ref as React.RefObject<HTMLElement>}>
    <h1>Quem somos</h1>
    <ul className='card-grid no-list-style'>
      {(props.content as AlpPartnerContent[]).map(partnerMap)}
    </ul>
  </section>
));

Partners.displayName = 'Partners';

export default Partners;