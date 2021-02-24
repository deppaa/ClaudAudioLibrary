import { LOAD_BOOKS_LIST, NEXT_OFFSET, PRELOADER_STATE, IS_LOAD, IS_END } from './types'
import YandexDisk from '../../Hoock/YandexDisk'

const { getResources } = YandexDisk()

export const nextOffset = (data) => {
	return {
		type: NEXT_OFFSET,
		payload: data
	}
}

export const putData = (data) => {
	return {
		type: LOAD_BOOKS_LIST,
		payload: data
	}
}

export const isLoad = (data) => {
	return {
		type: IS_LOAD,
		payload: data
	}
}

export const isEnd = (data) => {
	return {
		type: IS_END,
		payload: data
	}
}

export const loadBooksList = (offset, limit) => async (dispatch, getState) => {
	try {
		const result = await getResources({
			url: '/CloudAudioBookPayer',
			fields: ['_embedded.items.name', '_embedded.items.path', '_embedded.items.custom_properties', '_embedded.items.resource_id'],
			sort: 'modified',
			offset: offset,
			limit: limit
		})
		const data = result.data._embedded.items

		for (let i = 0; i < data.length; i++) {
			const element = data[i].path.replace('disk:', '')

			const img = await getResources({
				url: element,
				media_type: 'image'
			})

			if (img.data.length) {
				data[i].image = img.data[0].file
			} else {
				data[i].image = false
			}
		}
		if (data.length == 0) {
			dispatch(isEnd(true))
		}
		dispatch(isLoad(false))
		dispatch(putData(data))
	} catch (error) {
		console.log(error)
	}
}