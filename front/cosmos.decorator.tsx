import * as React from 'react';
import { CommonStylesProvider } from './theme';

const CommonStylesDecorator: React.FC = ({ children }) => (
  <CommonStylesProvider>{children}</CommonStylesProvider>
);

export default CommonStylesDecorator;
