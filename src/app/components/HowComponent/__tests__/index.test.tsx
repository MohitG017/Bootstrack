import * as React from 'react';
import { render } from '@testing-library/react';

import { HowComponent } from '..';

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

describe('<HowComponent  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<HowComponent />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
