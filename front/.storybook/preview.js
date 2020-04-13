import { addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-console';


addDecorator(withInfo({inline: true}));
addDecorator(withKnobs);
