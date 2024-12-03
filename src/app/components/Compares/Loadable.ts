/**
 *
 * Asynchronously loads the component for Compares
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Compares = lazyLoad(
  () => import('./index'),
  module => module.Compares,
);
