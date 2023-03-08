import { render } from '@testing-library/react';
import { LayoutTemplate } from '..';

describe('InternalServerErrorTemplate', () => {
  it('to match snapshot', () => {
    const { container } = render(<LayoutTemplate />);
    expect(container).toMatchSnapshot();
  });
});
