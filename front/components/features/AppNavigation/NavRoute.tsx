import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { LinkButton } from '../../ui/Button';

interface Props {
  href: string;
  name: string;
}

export const NavRoute: React.FC<Props> = ({ href, name }) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <LinkButton variant={isActive ? 'ghost' : 'clean'} fullWidth>
        {name}
      </LinkButton>
    </Link>
  );
};
