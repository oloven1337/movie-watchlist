import * as types from '../action-types'

const initialState = {
    watchlist: [],
    watched: []
}

export default function movies(state = initialState, action) {
    switch (action.type) {
        case types.ADD_MOVIE_TO_WATCHLIST: {
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        }
        default: {
            return state
        }
    }
}
