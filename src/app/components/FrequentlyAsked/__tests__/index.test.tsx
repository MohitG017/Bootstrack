import * as React from 'react';
import { render } from '@testing-library/react';

import { FrequentlyAsked } from '..';

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

describe('<FrequentlyAsked  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<FrequentlyAsked />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
