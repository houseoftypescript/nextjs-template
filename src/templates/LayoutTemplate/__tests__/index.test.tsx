import { render } from '@testing-library/react';
import { LayoutTemplate } from '..';

describe('LayoutTemplate', () => {
  it('to match snapshot without children', () => {
    const { container } = render(<LayoutTemplate />);
    expect(container).toMatchSnapshot();
  });

  it('to match snapshot with children', () => {
    const { container } = render(
      <LayoutTemplate>
        <div>Layout</div>
      </LayoutTemplate>
    );
    expect(container).toMatchSnapshot();
  });
});
