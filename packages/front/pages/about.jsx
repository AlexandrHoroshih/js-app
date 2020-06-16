import * as React from 'react';
import Link from 'next/link';

import { LinkButton } from '../components/ui/Button';

const About = () => (
  <div>
    <h1>about</h1>
    <h2>test page</h2>
    <p>with test content</p>
    <Link href="/" passHref>
      <LinkButton>To about</LinkButton>
    </Link>
  </div>
);

export default About;
