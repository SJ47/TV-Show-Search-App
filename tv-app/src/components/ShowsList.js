import React from 'react'

const ShowsList = ({ shows, onSelectedShow }) => {

    const showNames = shows.map((show) => {
        return (
            <li onClick={() => { onSelectedShow(show) }} key={show.show.id}>
                {show.show.name}
            </li>
        )
    })
    return (
        <>
            <ul>{showNames}</ul>
        </>
    )
}

export default ShowsList
