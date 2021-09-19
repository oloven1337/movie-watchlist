import * as types from '../action-types'

const initialState = {
    movies: [],
    isFetching: true,
    hasError: false
}

export default function movies(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_MOVIE_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.FETCH_MOVIE_SUCCESS: {
            return {
                ...state,
                movies: action.payload,
                isFetching: false
            }
        }
        case types.FETCH_MOVIE_ERROR: {
            return {
                ...state,
                isFetching: false,
                hasError: true
            }
        }
        default: {
            return state
        }
    }
}
