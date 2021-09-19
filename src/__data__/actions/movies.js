import axios from 'axios'

import * as types from '../action-types'

export const getMovies = (query) => async (dispatch) => {
    try {
        dispatch({
            type: types.FETCH_MOVIE_REQUEST
        })

        // const data = await axios(`https://api.themoviedb.org/3/search/movie?api_key=a658a21b98bb071bb289178833cfbbb9&language=en-US&page=1&include_adult=false&query=${query}`)

        const mockData = [
            {
                adult: false,
                backdrop_path: '/gGssqOMNqrOa5EgmpKmZjJfTRlL.jpg',
                genre_ids: [35, 18],
                id: 121986,
                original_language: 'en',
                original_title: 'Frances Ha',
                overview: 'An aspiring dancer moves to New York City and becomes caught up in a whirlwind of flighty fair-weather friends, diminishing fortunes and career setbacks.',
                popularity: 8.384,
                poster_path: '/paHlEvMz4rqzMsqxSbMOBn4HtM3.jpg',
                release_date: '2013-05-17',
                title: 'Frances Ha',
                video: false,
                vote_average: 7.4,
                vote_count: 1093
            },
            {
                adult: false,
                backdrop_path: '/gGssqOMNqrOa5EgmpKmZjJfTRlL.jpg',
                genre_ids: [35, 18],
                id: 121086,
                original_language: 'en',
                original_title: 'Frances Ha',
                overview: 'Flighty fair-weather friends, diminishing fortunes and career setbacks.',
                popularity: 8.384,
                poster_path: '/paHlEvMz4rqzMsqxSbMOBn4HtM3.jpg',
                release_date: '2013-05-17',
                title: 'Harry Potter',
                video: false,
                vote_average: 7.4,
                vote_count: 1093
            }
        ]
        dispatch({
            type: types.FETCH_MOVIE_SUCCESS,
            payload: mockData
            // payload: data.data.results
        })

    } catch (err) {
        console.log(err)
    }
}
