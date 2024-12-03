/**
 *
 * Asynchronously loads the component for HowComponent
 *
 */

import { lazyLoad } from 'utils/loadable';

export const HowComponent = lazyLoad(
  () => import('./index'),
  module => module.HowComponent,
);
