import { render } from '@testing-library/react';
import { InternalServerErrorTemplate } from '..';

describe('InternalServerErrorTemplate', () => {
  it('to match snapshot', () => {
    const { container } = render(<InternalServerErrorTemplate />);
    expect(container).toMatchSnapshot();
  });
});
