import React, { useEffect, useState } from 'react'
import ShowsList from "../components/ShowsList"
import ShowDetails from "../components/ShowDetails"

const TvContainer = () => {

    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState(null);
    const [searchShow, setSearchShow] = useState("")
    const [buildSearch, setBuildSearch] = useState("")

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
        console.log("handleShowInput triggered", buildSearch);
    }

    // When submit search button is clicked, then request a new fetch of API data
    const handleShowSubmit = (event) => {
        event.preventDefault();
        console.log("handleShowSubmit triggered", buildSearch);
        setSearchShow(buildSearch)
    }

    useEffect(() => {
        getShows();
    }, [searchShow]);

    return (
        <>
            <h1>TV Show App</h1>

            <form onSubmit={handleShowSubmit}>
                {/* Commented line below would search as the user types.  Nice, but a lot of API fetch calls in the process */}
                {/* <input onChange={event => setSearchShow(event.target.value)} type="text" placeholder="Search for show" /> */}
                <input onChange={event => handleBuildSearch(event)} type="text" placeholder="Search for show" />
                <input type="submit" value="Search" />

            </form>

            <div className="tv-container">
                <ShowsList shows={shows} onSelectedShow={handleSelectedShow} />
                <ShowDetails selectedShow={selectedShow} />
            </div>
        </>
    )
}

export default TvContainer;