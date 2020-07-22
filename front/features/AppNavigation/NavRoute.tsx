import * as React from 'react';

import { LinkButton } from '../../components/ui/Button';

interface Props {
  href: string;
  name: string;
}

export const NavRoute: React.FC<Props> = ({ href, name }) => {
  return (
    <LinkButton variant={isActive ? 'ghost' : 'clean'} fullWidth>
      {name}
    </LinkButton>
  );
};
