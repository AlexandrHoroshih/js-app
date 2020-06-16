import * as React from 'react';
import Link from 'next/link';

import { Button, LinkButton } from '../components/ui/Button';

const Home = () => (
  <>
    <h1>Test H1</h1>
    <h2>Test H2</h2>
    <h2 className="as-h1">Test H2 as H1</h2>
    <Button>Test</Button>
    <Link href="/about" passHref>
      <LinkButton>To about</LinkButton>
    </Link>
    <div style={{ padding: 20 }}>
      <Link href="/about">
        <a>To about</a>
      </Link>
    </div>
  </>
);

export default Home;
