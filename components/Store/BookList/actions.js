import { LOAD_BOOKS_LIST, PRELOADER_STATE } from './types'
import YandexDisk from '../../Hoock/YandexDisk'

const { getResources } = YandexDisk()

export const putData = (data) => {
	return {
		type: LOAD_BOOKS_LIST,
		payload: data
	}
}

export const loadBooksList = () => async (dispatch, getState) => {
	try {
		const result = await getResources({
			url: '/CloudAudioBookPayer',
			fields: ['_embedded.items.name', '_embedded.items.path', '_embedded.items.custom_properties', '_embedded.items.resource_id']
		})
		const data = result.data._embedded.items

		for (let i = 0; i < data.length; i++) {
			const element = data[i].path.replace('disk:', '')

			const img = await getResources({
				url: element,
				media_type: 'image'
			})

			data[i].image = img.data[0].file
		}

		dispatch(putData(data))
	} catch (error) {
		console.log(error)
	}
}