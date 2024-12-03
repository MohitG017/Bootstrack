/**
 *
 * Asynchronously loads the component for WhyComp
 *
 */

import { lazyLoad } from 'utils/loadable';

export const WhyComp = lazyLoad(
  () => import('./index'),
  module => module.WhyComp,
);
