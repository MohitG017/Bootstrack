import * as React from 'react';
import { render } from '@testing-library/react';

import { CoreStack } from '..';

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

describe('<CoreStack  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CoreStack />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
