import { render } from '@testing-library/react';
import Favourites from './Favourites';

const mockOnFavImageClicked = jest.fn();
const favouriteShows = []

describe('Favourites', () => {
  it('should render styles correctly', () => {
    const { container } = render(
        <Favourites favouriteShows={favouriteShows} onFavImageClicked={mockOnFavImageClicked}/>
    );
    expect(container).toMatchSnapshot();
  });
});
