/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Page from './Page';

describe('Display', () => {
  it('renders without crashing', () => {
    shallow(<Page>test</Page>);
  });
});
