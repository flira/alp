import '../styles/fonts.css';
import '../styles/variables.css';
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/material-icons/css/material-icons.css';
import '../node_modules/material-icons/iconfont/material-icons.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
