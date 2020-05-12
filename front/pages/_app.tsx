import { AppProps } from 'next/app';

import { CommonStylesProvider } from '../theme';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommonStylesProvider>
      <Component {...pageProps} />
    </CommonStylesProvider>
  );
}
