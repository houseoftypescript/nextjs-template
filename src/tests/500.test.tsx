import InternalServerErrorPage from '@/pages/500';
import { render } from '@testing-library/react';

describe('InternalServerErrorPage', () => {
  it('to match snapshot', () => {
    const { container } = render(<InternalServerErrorPage />);
    expect(container).toMatchSnapshot();
  });
});
