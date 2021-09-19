import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import movies from './reducers/movie'

const rootReducer = combineReducers({
    movies
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
