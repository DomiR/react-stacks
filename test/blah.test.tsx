import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HStack } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HStack />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
