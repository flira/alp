import type { AlpProductContent } from '../../../types';
import React from 'react';
import PRODUCT_CSS from './product.module.css';

function Product({ description, icon, name }: AlpProductContent) {
  return (
    <div className={`card ${PRODUCT_CSS.card}`}>
      <div>
        <span
          className={`material-icons mi-${icon} ${PRODUCT_CSS.icon}`} />
      </div>
      <h2 className={PRODUCT_CSS.name}>
        {name}
      </h2>
      <p className={PRODUCT_CSS.content}>
        {description}
      </p>
    </div>
  );
}

export default Product;