import React, { useEffect, useState } from 'react';
import ShowsList from "../components/ShowsList";
import ShowDetails from "../components/ShowDetails";
import Favourites from '../components/Favourites';

const TvContainer = () => {

    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState(null);
    const [searchShow, setSearchShow] = useState("");
    const [buildSearch, setBuildSearch] = useState("");
    const [favouriteShows, setFavouriteShows] = useState([]);

    const getShows = () => {
        fetch(`http://api.tvmaze.com/search/shows?q=${searchShow}`)
            .then(res => res.json())
            .then(data => setShows(data))
    }

    const handleSelectedShow = (show) => {
        setSelectedShow(show)
    }

    // Build out the search string so as not to continually call the fetch before user has entered his full search string and submit is clicked
    const handleBuildSearch = (event) => {
        event.preventDefault();
        setBuildSearch(event.target.value)
        // console.log("handleShowInput triggered", buildSearch);
    }

    // When submit search button is clicked, then request a new fetch of API data
    const handleShowSubmit = (event) => {
        event.preventDefault();
        // console.log("handleShowSubmit triggered", buildSearch);
        setSearchShow(buildSearch)
    }

    // Handle the add fav show to array of fav shows after favourite clicked and if not already a favourite
    const handleFavouriteClick = (favShow) => {

        // NOTE: includes() method does not fully work for this example - it will add in a duplicate if you re-search and add fav
        // So using some() method instead to check the id does not already exist
        if (!favouriteShows.some(favouriteShow => favouriteShow.show.id === favShow.show.id)) {
            // Add a favourite tag to the show object
            favShow.show.favourite = true;

            const newFavShowList = [...favouriteShows, favShow]
            setFavouriteShows(newFavShowList);
        } else {
            handleDeleteFavouriteShow(favShow);
        }
    }

    // Handle what to do when the fav image in the favourite list is clicked 
    const handleFavImageClicked = (favShowClicked) => {
        // Update the showDetail card with the favourite clicked
        handleSelectedShow(favShowClicked);

    }

    // Handle delete favourite show
    const handleDeleteFavouriteShow = (favShow) => {
        const newFavShowList = favouriteShows.filter((show) => {
            return show !== favShow
        })

        // Update the favouriteShows state with the new array (with the item clicked removed)
        favShow.show.favourite = false
        setFavouriteShows(newFavShowList)
    }


    // useEffect setup
    useEffect(() => {
        getShows();
    }, [searchShow]);

    return (
        <>
            <div className="container">
                <h1 className="header"><span className="header-text">TV Show Search</span>
                    <hr />
                    <form onSubmit={handleShowSubmit}>
                        {/* Commented line below would search as the user types.  Nice, but a lot of API fetch calls in the process */}
                        {/* <input onChange={event => setSearchShow(event.target.value)} type="text" placeholder="Search for show" /> */}
                        <input className="input-search" onChange={event => handleBuildSearch(event)} type="text" placeholder="Search for TV show" />
                        <input className="submit-btn" type="submit" value="Search" />

                    </form>
                </h1>
            </div>
            <div className="tv-container ">
                <div className="favouritesContainer">
                    <Favourites favouriteShows={favouriteShows} onFavImageClicked={handleFavImageClicked} />
                </div>

                <ShowsList shows={shows} onSelectedShow={handleSelectedShow} />
                <ShowDetails selectedShow={selectedShow} onFavouriteClick={handleFavouriteClick} />

            </div>

        </>
    )
}

export default TvContainer;