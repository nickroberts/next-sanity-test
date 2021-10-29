import { render } from '@testing-library/react';

import MainMenu from './main-menu';

describe('MainMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MainMenu Link={() => null} activePath="/" />
    );
    expect(baseElement).toBeTruthy();
  });
});
