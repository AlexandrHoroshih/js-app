import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { css } from 'linaria';

import { CommonStylesProvider } from './theme';

const editable = css`
  &[contenteditable='true'] *:hover {
    cursor: text;
    box-shadow: 0 0 0 2px red inset;
  }
`;

const CommonDecorator: React.FC = ({ children }) => {
  const [isContentEditable] = useValue('Text edit', { defaultValue: false });

  return (
    <div className={editable} contentEditable={isContentEditable}>
      <CommonStylesProvider>{children}</CommonStylesProvider>
    </div>
  );
};

export default CommonDecorator;
