import React from 'react';

import { render, within, screen } from '@testing-library/react';
import { test, expect } from 'vitest';

import Home from './page';

test('main', () => {
  render(
    <Home/>
  );
  const main = within(screen.getByRole('main'));
  expect(
    main.getByText('Why Tailwind Labs excites me')
  ).toBeDefined();

  const header = main.getByRole('heading', { level: 1 });
  expect(header).toBeDefined();
  expect(header.innerHTML).toEqual('Tailwind Labs CL&nbsp;');
});
