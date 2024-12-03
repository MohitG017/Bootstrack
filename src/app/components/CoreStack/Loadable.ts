/**
 *
 * Asynchronously loads the component for CoreStack
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CoreStack = lazyLoad(
  () => import('./index'),
  module => module.CoreStack,
);
