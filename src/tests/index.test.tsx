import HomePage from '@/pages';
import { render } from '@testing-library/react';

describe('HomePage', () => {
  it('to match snapshot', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
