import React from 'react'

const ShowDetails = ({ selectedShow, onFavouriteClick }) => {

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
            <h2 className="selected-card-title">{selectedShow.show.name}</h2>
            <hr />

            <img src={selectedShow.show.image.medium} alt="" height="250px" className="selected-img" />

            <div className="rating-fav-text-container">
                <h4 className="rating-text">Rating</h4>
                <h4 className="favourite-text">Favourite</h4>
            </div>
            <div className="rating-fav-circle-container">
                <p className="rating">{selectedShow.show.rating.average}</p>

                {selectedShow.show.favourite ?
                    (<i className="fas fa-minus-circle" onClick={() => { onFavouriteClick(selectedShow) }}  ></i>) :
                    (<i className="fas fa-plus-circle" onClick={() => { onFavouriteClick(selectedShow) }}  ></i>)
                }
            </div>

            <h2 className="summary-text-title">Summary</h2>
            <hr />
            <div
                dangerouslySetInnerHTML={{
                    __html: selectedShow.show.summary
                }} className="summary-text"></div>

        </div>
    )
}

export default ShowDetails
