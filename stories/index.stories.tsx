import * as React from 'react';

import { Button } from '@storybook/react/demo';
import PropsAddon from 'storybook-addon-props-fela';
import { MockedProvider } from '@apollo/react-testing';
import { storiesOf, setAddon } from '@storybook/react';

import { Dashboard } from '../packages-modules/workspaces/browser/src/components/Dashboard/_Dashboard';

let mocks = [];

setAddon(PropsAddon);

storiesOf('Button', module)
  .addDecorator((story) => (
    <MockedProvider mocks={mocks}>
       {story()}
    </MockedProvider>
))
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('simple', () => (
    <Button><span role="img" aria-label="so cool">!</span></Button>
  ));

storiesOf('Dashboard', module)
  .add('Page View', () => <div>Cool</div>);