import React from 'react'

// This component will render the view all the users favourite shows as clickable image thumbnails

const Favourites = ({ favouriteShows, onFavImageClicked }) => {

    const favouriteShowsImages = favouriteShows.map((favouriteShow) => {
        return <img onClick={() => { onFavImageClicked(favouriteShow) }} className="fav-image" src={favouriteShow.show.image.medium} key={favouriteShow.show.id} alt="" height="100px"></img>
    })

    // Render view of a users favourite shows
    return (
        <>
            <h2 className="favouriteShowsTitle">Favourite Shows</h2>
            <hr />
            <div className="favContainer">
                {favouriteShowsImages}
            </div>
        </>
    )
}

export default Favourites
