import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base>Children</Base>);
    expect(container).toMatchSnapshot();
  });
});
