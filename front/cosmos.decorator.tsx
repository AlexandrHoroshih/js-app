import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';
import { css } from 'linaria';

import { CommonStylesProvider } from './theme';

const editable = css`
  &[data-editable='true'] *:hover {
    cursor: text;
    box-shadow: 0 0 0 2px green inset;
  }

  &[data-editable='true'] [contenteditable='true'] {
    box-shadow: 0 0 0 2px red inset;
  }
`;

const onMove = ({ target }) => {
  const targetEditable = target.contentEditable;
  const isEditable = targetEditable === 'inherit' ? false : targetEditable;

  if (!isEditable) {
    target.contentEditable = true;
  } else {
    target.contentEditable = false;
  }
};

const ContentEditableDecorator: React.FC = ({ children }) => {
  const [isContentEditable] = useValue('Global:text edit', {
    defaultValue: false,
  });

  React.useEffect(() => {
    if (isContentEditable) {
      document.addEventListener('mouseup', onMove);
    }

    if (!isContentEditable) {
      document.removeEventListener('mouseup', onMove);
    }

    return () => {
      document.removeEventListener('mouseup', onMove);
    };
  }, [isContentEditable]);

  return (
    <div className={editable} data-editable={isContentEditable}>
      {children}
    </div>
  );
};

const CommonDecorator: React.FC = ({ children }) => {
  return (
    <ContentEditableDecorator>
      <CommonStylesProvider>{children}</CommonStylesProvider>
    </ContentEditableDecorator>
  );
};

export default CommonDecorator;
