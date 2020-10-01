import { createStore, combineReducers, applyMiddleware } from 'redux'
import { BooksListReducer } from './BookList/reducers'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
	BooksList: BooksListReducer
})

export default createStore(rootReducers, applyMiddleware(thunk))