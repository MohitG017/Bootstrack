import * as React from 'react';
import { render } from '@testing-library/react';

import { WhyComp } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<WhyComp  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<WhyComp />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
