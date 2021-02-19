import { LOAD_BOOKS_LIST, NEXT_OFFSET, PRELOADER_STATE } from "./types";

initialState = {
	data: [],
	preloader: false,
	offset: 0
}

export const BooksListReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_BOOKS_LIST:
			console.log(state.offset)
			return { ...state, data: action.payload }

		case NEXT_OFFSET:
			return { ...state, offset: state.offset + action.payload }

		default:
			return state
	}
}