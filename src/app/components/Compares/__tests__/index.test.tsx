import * as React from 'react';
import { render } from '@testing-library/react';

import { Compares } from '..';

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

describe('<Compares  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Compares />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
