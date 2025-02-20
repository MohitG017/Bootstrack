import * as React from 'react';
import { render } from '@testing-library/react';

import { GetDreams } from '..';

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

describe('<GetDreams  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<GetDreams />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
