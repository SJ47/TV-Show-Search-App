import React from 'react'

const ShowsList = ({ shows, onSelectedShow }) => {

    const showNames = shows.map((show) => {
        if (!show || !show.show.image) {
            return (null)
        }

        // Replace any null data with a placeholder so as not to error out
        // if (!show.show.image) {
        //     show.show.image = { medium: "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" }
        // }

        if (!show.show.network) {
            show.show.network = { name: "unknown" }
        }

        if (!show.show.rating.average) {
            show.show.rating.average = "na"
        }

        return (
            // <li onClick={() => { onSelectedShow(show) }} key={show.show.id}>
            //     {show.show.name}
            // </li>


            <li onClick={() => { onSelectedShow(show) }} key={show.show.id}>
                <img className="card-img" src={show.show.image.medium} width="150" height="200px">
                </img>
            </li >
        )
    })


    return (
        <>
            <div className="left-column">
                <h2 className="search-results-header">Search Results</h2>
                <hr />
                <ul>{showNames}</ul>
            </div>
        </>
    )
}

export default ShowsList
