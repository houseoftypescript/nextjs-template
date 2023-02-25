import NotFoundPage from '@/pages';
import { render } from '@testing-library/react';

describe('NotFoundPage', () => {
  it('to match snapshot', () => {
    const { container } = render(<NotFoundPage />);
    expect(container).toMatchSnapshot();
  });
});
