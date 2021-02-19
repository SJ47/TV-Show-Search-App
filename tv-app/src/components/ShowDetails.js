import React from 'react'

const ShowDetails = ({ selectedShow }) => {

    if (!selectedShow) {
        return (null)
    }

    // Replace any null data with a placeholder so as not to error out
    if (selectedShow.show.image === null) {
        selectedShow.show.image = { medium: "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" }
    }

    if (!selectedShow.show.network) {
        selectedShow.show.network = { name: "unknown" }
    }

    if (!selectedShow.show.rating.average) {
        selectedShow.show.rating.average = "No Rating"
    }


    return (
        <div>
            <h2>{selectedShow.show.name}</h2>
            <h4>Rating: {selectedShow.show.rating.average}</h4>

            <img src={selectedShow.show.image.medium} alt="" height="250px" />
            <p>Network: {selectedShow.show.network.name}</p>
        </div>
    )
}

export default ShowDetails
