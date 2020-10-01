import { LOAD_BOOKS_LIST, PRELOADER_STATE } from "./types";

initialState = {
	data: [],
	preloader: false
}

export const BooksListReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_BOOKS_LIST:
			return { ...state, data: action.payload }

		case PRELOADER_STATE:
			return { ...state, preloader: action.payload }

		default:
			return state
	}
}