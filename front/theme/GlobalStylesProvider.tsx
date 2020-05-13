import * as React from 'react';
import { css } from 'linaria';
import { normalize, rem } from 'polished';
import Head from 'next/head';

// about normalize.css https://necolas.github.io/normalize.css/
// transforming polished's version of normalize.css (has type Styles[]) to object, so linaria can convert it into global styles;
const normalizeCss = normalize().reduce(
  (acc, currentStylesObj) => ({ ...acc, ...currentStylesObj }),
  {},
);

const BASE_FONT_SIZE = 16; // intended to use with polished's "rem" function, rem's default reference ont size is 16px;

export const globals = css`
  :global() {
    ${normalizeCss}

    html {
      box-sizing: border-box;
      font-size: ${BASE_FONT_SIZE}px;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
      margin: 0;
      font-family: 'Roboto', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }

    h1,
    .as-h1 {
      font-size: ${rem(96)};
      font-style: normal;
      font-weight: 300;
      line-height: ${rem(112)};
      letter-spacing: -${rem(1.5)};
    }

    h2,
    .as-h2 {
      font-size: ${rem(60)};
      font-style: normal;
      font-weight: 300;
      line-height: ${rem(70)};
    }

    h3,
    .as-h3 {
      font-size: ${rem(48)};
      font-style: normal;
      font-weight: normal;
      line-height: ${rem(56)};
    }

    h4,
    .as-h4 {
      font-size: ${rem(34)};
      font-style: normal;
      font-weight: normal;
      line-height: ${rem(40)};
      letter-spacing: ${rem(0.25)};
    }

    h5,
    .as-h5 {
      font-size: ${rem(24)};
      font-style: normal;
      font-weight: normal;
      line-height: ${rem(28)};
    }

    h6,
    .as-h6 {
      font-size: ${rem(20)};
      font-style: normal;
      font-weight: 500;
      line-height: ${rem(28)};
      letter-spacing: ${rem(0.15)};
    }

    p {
      font-size: ${rem(16)};
      font-style: normal;
      font-weight: normal;
      line-height: ${rem(24)};
      letter-spacing: ${rem(0.44)};
    }

    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  }
`;

export const GlobalStylesProvider: React.FC = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <>{children}</>
  </>
);
