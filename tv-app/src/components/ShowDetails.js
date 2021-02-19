import React from 'react'

const ShowDetails = ({ selectedShow }) => {

    if (!selectedShow) {
        return (null)
    }

    // Replace any null data with a placeholder so as not to error out
    if (!selectedShow.show.image) {
        selectedShow.show.image = { medium: "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" }
    }

    if (!selectedShow.show.network) {
        selectedShow.show.network = { name: "unknown" }
    }

    if (!selectedShow.show.rating.average) {
        selectedShow.show.rating.average = "na"
    }


    return (
        <div className="right-column">
            <div className="selected-card">
                <h2 className="selected-card-title">{selectedShow.show.name}</h2>
                <hr />
                <img src={selectedShow.show.image.medium} alt="" height="250px" />
                <div className="rating-fav-text-container">
                    <h4 className="rating-text">Rating</h4>
                    <h4 className="favourite-text">Favourite</h4>

                </div>
                <div className="rating-fav-circle-container">
                    <p className="rating">{selectedShow.show.rating.average}</p>
                    <p className="favourite">+</p>
                    {/* <p>Network: {selectedShow.show.network.name}</p> */}
                </div>
            </div>
        </div>
    )
}

export default ShowDetails
