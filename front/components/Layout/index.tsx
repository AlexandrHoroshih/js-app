import * as React from 'react';
import Head from 'next/head';

import { Background } from '../../ui/Background';

interface Props {
  title: string;
}

export const Layout: React.FunctionComponent<Props> = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;600;800&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Background>{children}</Background>
  </>
);
