import * as types from '../action-types'

export const addMovieToWatchlist = movie => {
    return {
        type: types.ADD_MOVIE_TO_WATCHLIST,
        payload: movie
    }
}
