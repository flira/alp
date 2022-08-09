import type { AlpPage, AlpProductContent } from '../../types';
import React from 'react';
import PRODUCTS_CSS from './products.module.css';
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

const productMap: (page: AlpProductContent) => JSX.Element =
  page => (
    <li key={encodeURI(page.name)}>
      <Product
        description={page.description}
        icon={page.icon}
        name={page.name} />
    </li>);

const Products: AlpPage = React.forwardRef(({ content, id }, ref) => (
  <section
    className={`has-top-triangle ${PRODUCTS_CSS.products}`}
    id={id}
    ref={ref as React.RefObject<HTMLElement>}>
    <h1 className={PRODUCTS_CSS.title}>Produtos</h1>
    <div className='lim-width'>
      <ul className={`card-grid no-list-style ${PRODUCTS_CSS.list}`}>
        {(content as AlpProductContent[]).map(productMap)}
      </ul>
    </div>
  </section>
));

Products.displayName = 'Products';

export default Products;