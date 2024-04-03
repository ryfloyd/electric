/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import { vi } from 'vitest';
import 'vitest-localstorage-mock';

vi.mock('next/router', () => require('next-router-mock'));
