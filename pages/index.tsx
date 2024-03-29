import type { AlpPartnerContent, AlpProductContent, AlpAboutContent, AlpHeroContent, PageResponse } from '../types';
import { About, Contact, Hero, Menu, Partners, Products } from '../components';
import { PageFilter } from '../modules';
import MenuItem from '../components/Menu/MenuItem';
import Head from 'next/head';
import React from 'react';

function Home({ pages }: { pages: PageResponse[] }): JSX.Element {
  const pageFilter = new PageFilter(pages);
  const references: { [key: string]: React.RefObject<HTMLElement> } = {
    about: React.createRef(),
    contact: React.createRef(),
    partners: React.createRef(),
    products: React.createRef()
  };

  return (
    <>
      <Head>
        <title>ALP</title>
        <meta name="description" content="ALP, consultoria linguística." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='main-header'>
        <Menu>
          <MenuItem target={references.about}>
            Proposta
          </MenuItem>
          <MenuItem target={references.products}>
            Produtos
          </MenuItem>
          <MenuItem target={references.partners}>
            Quem somos
          </MenuItem>
          <MenuItem target={references.contact}>
            Contato
          </MenuItem>
        </Menu>
      </header>
      <main className='alp'>
        <Hero content={
          pageFilter.filter('hero').mapMeta() as AlpHeroContent[]
        } />
        <About
          content={
            pageFilter.filter('about').mapMeta() as AlpAboutContent[]
          }
          id="proposta"
          ref={references.about} />
        <Products
          content={
            pageFilter.filter('products').mapMeta() as AlpProductContent[]
          }
          id="produtos"
          ref={references.products} />
        <Partners
          content={
            pageFilter.filter('partners').mapMeta() as AlpPartnerContent[]
          }
          id="quem-somos"
          ref={references.partners} />
        <Contact
          content={
            pageFilter.filter('Contact').mapContent() as string
          }
          id="contato"
          ref={references.contact}
        />
      </main>
      <footer className='main-footer'>
        <div>ALP – 2022</div>
      </footer>
    </>
  )
};

export async function getStaticProps() {
  const getApiRoute: (fields: string | null) => string = (fields) => {
    const isProd: boolean = true; //  /prod/i.test(process.env.NODE_ENV);
    const host: string = isProd ? 'alp.toscocloud.com' : 'localhost:8000';
    const pageRoute: string = 'wp-json/wp/v2/pages';
    const _fields = fields ? `?_fields=${fields}` : '';

    return `http${isProd ? 's' : ''}://${host}/${pageRoute}${_fields}`;
  };

  const pages = await fetch(getApiRoute('content,meta,title'))
    .then((response: void | Response) => {
      if (!response || !response.ok) {
        console.warn(`Error: ${(response as Response).status}`)
        return {};
      }
      return response.json();
    });

  return {
    props: {
      pages
    }
  }
}

export default Home;