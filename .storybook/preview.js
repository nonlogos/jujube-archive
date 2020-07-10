import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { GlobalStyles } from './storyStyles';

addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
));
