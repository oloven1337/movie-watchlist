import React from 'react'
import { useSelector } from 'react-redux'
import { watchlistSelector } from '../../__data__/selectors/movies'

export const Watchlist = () => {

    const watchlist = useSelector(watchlistSelector)

    console.log(watchlist)

    return (
        <div>
            <h1>Watchlist page</h1>
        </div>
    )
}

