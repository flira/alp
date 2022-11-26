import type { AlpPage, AlpPartnerContent } from "../../types";
import React from "react";
import Partner from "./Partner";

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