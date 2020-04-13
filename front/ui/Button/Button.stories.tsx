import * as React from 'react';
import { Button } from '.';
import { Block } from '../Block';
import { text, boolean, number } from "@storybook/addon-knobs";

export default {title: 'Button'};

export const standartButton = () => (
    <>
        <Button
            onClick={(e) => console.log('ha', e)}
            disabled={boolean('Disabled', false)}
        >
            {text('Button text', 'Click me')}
        </Button>

        <Block>
            <Button>
                {text('Button text', 'Click me')}
            </Button>
        </Block>
    </>
);
standartButton.story = {
    parameters: {
        info: {
            text: `
            simple frinedly button
            `,
            propTables: [Button]
        },
    }
}
