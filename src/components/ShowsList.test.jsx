import { render } from '@testing-library/react';
import ShowsList from './ShowsList';

const shows = [
  {
    "score": 0.70166075,
    "show": {
    "id": 83,
    "url": "https://www.tvmaze.com/shows/83/the-simpsons",
    "name": "The Simpsons",
    "type": "Animation",
    "language": "English",
    "genres": [
    "Comedy",
    "Family"
    ],
    "status": "Running",
    "runtime": 30,
    "averageRuntime": 30,
    "premiered": "1989-12-17",
    "ended": null,
    "officialSite": "http://www.fox.com/the-simpsons/full-episodes",
    "schedule": {
    "time": "20:00",
    "days": [
    "Sunday"
    ]
    },
    "rating": {
    "average": 8.1
    },
    "weight": 100,
    "network": {
    "id": 4,
    "name": "FOX",
    "country": {
    "name": "United States",
    "code": "US",
    "timezone": "America/New_York"
    },
    "officialSite": "https://www.fox.com/"
    },
    "webChannel": null,
    "dvdCountry": null,
    "externals": {
    "tvrage": 6190,
    "thetvdb": 71663,
    "imdb": "tt0096697"
    },
    "image": {
    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/423/1058261.jpg",
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/423/1058261.jpg"
    },
    "summary": "<p><b>The Simpsons</b> is the longest running scripted show in US television history. It captures the adventures of Homer, Marge, Maggie, Bart and Lisa who are living in a fictional town called Springfield.</p>",
    "updated": 1678060033,
    "_links": {
    "self": {
    "href": "https://api.tvmaze.com/shows/83"
    },
    "previousepisode": {
    "href": "https://api.tvmaze.com/episodes/2493455"
    },
    "nextepisode": {
    "href": "https://api.tvmaze.com/episodes/2495308"
    }
    }
    }
    },
]
const mockOnSelectedShow = jest.fn();

describe('ShowsList', () => {
  it('should render styles correctly', () => {
    const { container } = render(
        <ShowsList shows ={shows} onSelectedShow={mockOnSelectedShow} />
    );
    expect(container).toMatchSnapshot();
  });
});
