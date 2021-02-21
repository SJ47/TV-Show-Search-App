import React, { useEffect, useState } from 'react';
import ShowsList from "../components/ShowsList";
import ShowDetails from "../components/ShowDetails";
import Favourites from '../components/Favourites';


// This parent container holds the state and logic for the app
const TvContainer = () => {

    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState(null);
    const [searchShow, setSearchShow] = useState("");
    const [buildSearch, setBuildSearch] = useState("");
    const [favouriteShows, setFavouriteShows] = useState([]);

    // Fetch shows and store as an array of shows inside component state
    const getShows = () => {
        fetch(`http://api.tvmaze.com/search/shows?q=${searchShow}`)
            .then(res => res.json())
            .then(data => setShows(data))
    }

    // Update state with a single show object that was selected
    const handleSelectedShow = (show) => {
        // Check if show is a favourite and if it is use that instead of the selected object 
        // to allow deleting from fav list regardless of whether selection is from fav list or search results list
        const tempShow = favouriteShows.find(favouriteShow => favouriteShow.show.id === show.show.id)
        if (tempShow) {
            show = tempShow
        }

        // Update the state with the selected show
        setSelectedShow(show)
    }

    // Build out the search string so as not to continually call the fetch before user has entered his full search string and submit is clicked
    const handleBuildSearch = (event) => {
        event.preventDefault();
        setBuildSearch(event.target.value)
    }

    // When submit search button is clicked, then request a new fetch of API data 
    // using the data the user has entered in to the input search box
    const handleShowSubmit = (event) => {
        event.preventDefault();
        setSearchShow(buildSearch)
    }

    // Handle the add fav show to array of fav shows after favourite clicked and if not already a favourite
    const handleFavouriteClick = (favShow) => {

        // NOTE: includes() method did not fully work for this example - it will add in a duplicate if you re-search and add fav
        // So using some() method instead to check the id does not already exist
        if (!favouriteShows.some(favouriteShow => favouriteShow.show.id === favShow.show.id)) {

            // If this is a new favourite show then
            // - Add a favourite tag to the show object
            // - Copy the current state of fav shows and add the new fav show
            favShow.show.favourite = true;
            const newFavShowList = [...favouriteShows, favShow]
            setFavouriteShows(newFavShowList);
        } else {
            // If not a new fav show
            // - it must already be a fav show
            // - therefore user is clicking to delete from fav shows
            handleDeleteFavouriteShow(favShow);
        }
    }

    // Handle what to do when the fav show in the favourite list is clicked 
    // Update the showDetail card with the favourite clicked
    // in the same manner as clicking on a show from the results list
    const handleFavImageClicked = (favShowClicked) => {
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


    // useEffect setup to run a fresh API fetch when a new searchShow has been submitted by user
    useEffect(() => {
        getShows();
    }, [searchShow]);


    // Render the views
    return (
        <>
            <div className="container">
                <h1 className="header"><span className="header-text">TV Show Search</span>
                    <hr />
                    <form onSubmit={handleShowSubmit}>
                        {/* Commented line below would search as the user types.  Nice, but a lot of API fetch calls in the process */}
                        {/* <input onChange={event => setSearchShow(event.target.value)} type="text" placeholder="Search for show" /> */}
                        <input className="input-search" onChange={event => handleBuildSearch(event)} type="text" placeholder="Search for TV show" autoFocus="autofocus onfocus=" />
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