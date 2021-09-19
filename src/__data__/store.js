import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import movies from './reducers/movie'
import watchlist from './reducers/watchlist'

const rootReducer = combineReducers({
    movies,
    watchlist
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
