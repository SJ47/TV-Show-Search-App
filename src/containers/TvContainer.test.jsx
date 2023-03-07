import { render } from '@testing-library/react';
import TvContainer from './TvContainer';

describe('TvContainer', () => {
  it('should render styles correctly', () => {
    const { container } = render(
        <TvContainer />
    );
    expect(container).toMatchSnapshot();
  });
});
