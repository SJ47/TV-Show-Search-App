import { render } from '@testing-library/react';
import ShowDetails from './ShowDetails';

const mockOnFavouriteClick = jest.fn();
const selectedShow = null

describe('ShowDetails', () => {
  it('should render styles correctly', () => {
    const { container } = render(
        <ShowDetails selectedShow={selectedShow} onFavouriteClick={mockOnFavouriteClick}/>
    );
    expect(container).toMatchSnapshot();
  });
});
