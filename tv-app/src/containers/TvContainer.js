import React, { useEffect, useState } from 'react'
import ShowsList from "../components/ShowsList"
import ShowDetails from "../components/ShowDetails"

const TvContainer = () => {

    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState(null);


    const getShows = () => {
        fetch("http://api.tvmaze.com/search/shows?q=office")
            .then(res => res.json())
            .then(data => setShows(data))
    }

    const handleSelectedShow = (show) => {
        // console.log("handleSelectedShow Clicked!", show.show.name)
        setSelectedShow(show)
    }

    useEffect(() => {
        getShows();
    }, []);

    return (
        <>
            <h1>TV Show App</h1>
            <div className="tv-container">
                <ShowsList shows={shows} onSelectedShow={handleSelectedShow} />
                <ShowDetails selectedShow={selectedShow} />
            </div>
        </>
    )
}

export default TvContainer;