import React from 'react'

// This component will render the view of a list of shows matching a search string input by the user
const ShowsList = ({ shows, onSelectedShow }) => {

    // Iterate through all the shows returned and render out the html with a clickable image for each show listed
    const showNames = shows.map((show) => {
        // If show object or show image do not exist, just return null
        if (!show || !show.show.image) {
            return (null)
        }

        // Replace any other null data with a placeholder so as not to error out
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
            <li onClick={() => { onSelectedShow(show) }} key={show.show.id}>
                <img className="card-img" src={show.show.image.medium} width="150" height="200px" alt="">
                </img>
            </li >
        )
    })

    // If no results are found, just display a no results found message
    let mess = "";
    if (showNames.length === 0) {
        mess = "No results found"
    }

    // Render the views
    return (
        <>
            <div className="left-column">
                <h2 className="search-results-header">Search Results</h2>
                <hr />
                <ul>{showNames}{mess}</ul>

            </div>
        </>
    )
}

export default ShowsList
