import { AppProps } from 'next/app';
import { css } from 'linaria';
import { normalize } from 'polished';

// transform polished's normalize Styles[] to object, so linaria can convert it into global styles;
const normalizeCss = normalize().reduce(
  (acc, currentStylesObj) => ({ ...acc, ...currentStylesObj }),
  {},
);

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    ${normalizeCss}
  }
`;

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
