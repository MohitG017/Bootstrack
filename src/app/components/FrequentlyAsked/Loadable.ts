/**
 *
 * Asynchronously loads the component for FrequentlyAsked
 *
 */

import { lazyLoad } from 'utils/loadable';

export const FrequentlyAsked = lazyLoad(
  () => import('./index'),
  module => module.FrequentlyAsked,
);
