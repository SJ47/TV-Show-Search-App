import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render styles correctly', () => {
    const { container } = render(
        <App />
    );
    expect(container).toMatchSnapshot();
  });
});
