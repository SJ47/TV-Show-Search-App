import React from 'react'

// This component will render the view of an individual shows details
const ShowDetails = ({ selectedShow, onFavouriteClick }) => {

    // If show object does not exist, just return null
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

    // Render view of card detail for an individual show
    return (
        <div className="right-column">
            <h2 className="selected-card-title">{selectedShow.show.name}</h2>
            <hr />

            <img src={selectedShow.show.image.medium} alt="" height="250px" className="selected-img" />

            <div className="rating-fav-text-container">
                <h4 className="rating-text">Rating</h4>
                <h4 className="favourite-text">Favourite</h4>
            </div>
            <div className="rating-fav-circle-container">
                <p className="rating">{selectedShow.show.rating.average}</p>

                {/* Render a + or - sign to add or delete a favourite show based on a show attribute being a fav or not */}
                {selectedShow.show.favourite ?
                    (<i className="fas fa-minus-circle" onClick={() => { onFavouriteClick(selectedShow) }}  ></i>) :
                    (<i className="fas fa-plus-circle" onClick={() => { onFavouriteClick(selectedShow) }}  ></i>)
                }
            </div>

            <h2 className="summary-text-title">Summary</h2>
            <hr />

            {/* Summary text is returned from API with HTML elements built into the text so using below to render that HTML text */}
            <div
                dangerouslySetInnerHTML={{
                    __html: selectedShow.show.summary
                }} className="summary-text"></div>

        </div>
    )
}

export default ShowDetails
