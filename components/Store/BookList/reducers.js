import { IS_END, IS_LOAD, LOAD_BOOKS_LIST, NEXT_OFFSET, PRELOADER_STATE } from "./types";

initialState = {
	data: [],
	preloader: false,
	offset: 0,
	isLoad: false,
	isEnd: false
}

export const BooksListReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_BOOKS_LIST:
			return { ...state, data: [...state.data, ...action.payload ] }

		case NEXT_OFFSET:
			console.log(state.offset)
			return { ...state, offset: action.payload }

		case IS_LOAD:
			return { ...state, isLoad: action.payload }

		case IS_END:
			return { ...state, isEnd: action.payload }

		default:
			return state
	}
}