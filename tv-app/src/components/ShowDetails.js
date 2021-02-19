import React from 'react'

const ShowDetails = ({ selectedShow }) => {

    if (!selectedShow) {
        return (null)
    }

    return (
        <div>
            <h4>Selected show is: {selectedShow.show.name}</h4>
        </div>
    )
}

export default ShowDetails
