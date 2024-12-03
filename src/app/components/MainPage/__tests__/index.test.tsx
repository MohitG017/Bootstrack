import * as React from 'react';
import { render } from '@testing-library/react';

import { MainPage } from '..';

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

describe('<MainPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<MainPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
