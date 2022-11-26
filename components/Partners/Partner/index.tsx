import type { AlpPartnerContent } from "../../../types";
import { imageLoader } from "../../../modules";
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
                loader={imageLoader}
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

export default Partner;