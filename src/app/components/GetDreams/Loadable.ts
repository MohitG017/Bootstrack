/**
 *
 * Asynchronously loads the component for GetDreams
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GetDreams = lazyLoad(
  () => import('./index'),
  module => module.GetDreams,
);
