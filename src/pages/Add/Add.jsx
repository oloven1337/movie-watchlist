import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { moviesSelector } from '../../__data__/selectors/movies'
import { getMovies } from '../../__data__/actions/movies'
import { ResultCard } from '../../components/ResultCard'


export const Add = () => {
    const dispatch = useDispatch()
    const movies = useSelector(moviesSelector)

    const [query, setQuery] = React.useState('')

    const onChange = e => {
        e.preventDefault()

        setQuery(e.target.value)

        dispatch(getMovies(e.target.value))
    }
    console.log('movies:', movies)
    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input
                            value={query}
                            onChange={onChange}
                            type="text"
                            placeholder="Search for a movie"/>
                    </div>
                    {movies.length > 0 && (
                        <ul className="results">
                            {movies.map(movie => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie}/>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
