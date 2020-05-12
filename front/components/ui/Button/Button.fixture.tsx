import { useValue } from 'react-cosmos/fixture';

import { Button } from '.';

export default () => {
  const [disabled] = useValue('disabled', { defaultValue: false });
  const [text] = useValue('text', { defaultValue: 'click me' });

  return <Button disabled={disabled}>{text}</Button>;
};
