import axios from 'axios'

const YandexDisk = () => {
	const token = 'AQAAAAANblUCAADLWwmiBoO1AkgFquRb-BXennk'

	//Плоский список всех файлов
	const getFlatResourceList = async ({
		fields,
		mediaType,
		limit,
		offset
	}) => {
		let baseURL = 'https://cloud-api.yandex.net:443/v1/disk/resources/files';
		mediaType != null ? baseURL += `&media_type=${encodeURIComponent(mediaType)}` : ''
		fields != null ? baseURL += `&fields=${encodeURIComponent(fields)}` : ''
		limit != null ? baseURL += `&limit=${limit}` : ''
		offset != null ? baseURL += `&offset=${offset}` : ''

		const result = await getApi(baseURL, token)
		const status = [result.status, result.statusText]
		const data = result.data;

		return {
			status,
			data
		}
	}

	//Метаинформация о файле или папке
	const getResources = async ({
		url,
		fields,
		limit,
		offset,
		media_type,
		sort
	}) => {
		let baseURL = `https://cloud-api.yandex.net:443/v1/disk/resources?path=${encodeURIComponent(url)}`;
		fields != null ? baseURL += `&fields=${encodeURIComponent(fields)}` : ''
		limit != null ? baseURL += `&limit=${limit}` : ''
		offset != null ? baseURL += `&offset=${offset}` : ''
		sort != null ? baseURL += `&sort=${sort}` : ''

		const result = await getApi(baseURL, token)
		let data = result.data;
		const status = [result.status, result.statusText]

		if (media_type != undefined) {
			let mediaData = [];
			data._embedded.items.map((i) => {
				if (i.media_type == media_type) mediaData.push(i)
			})
			data = mediaData
		}

		return {
			status,
			data
		}
	}

	/**
	 * Данные о Диске пользователя
	 * @param fields Список возвращаемых атрибутов
	 * @return Метаинформацию о диске пользователя
	*/
	const getDiskInfo = async ({
		fields
	}) => {
		let baseURL = 'https://cloud-api.yandex.net:443/v1/disk'
		fields != null ? baseURL += `?fields=${encodeURIComponent(fields)}` : ''
		const result = await getApi(baseURL, token)
		const status = [result.status, result.statusText]
		const data = result.data
		return {
			status,
			data
		}
	}

	//Добавление метаинформации для ресурса //betta
	const patchResource = async ({
		url,
		fields,
		body
	}) => {
		let baseURL = `https://cloud-api.yandex.net:443/v1/disk/resources?path=${encodeURIComponent(url)}`;
		const data = JSON.parse(`{"custom_properties": ${JSON.stringify(body)}}`)
		const result = await patchApi(baseURL, token, data)
		console.log(result.data)
	}

	const getApi = async (url, token) => {
		const result = await axios.get(url, { headers: { Authorization: `OAuth ${token}` } });
		return result;
	};

	const patchApi = async (url, token, data) => {
		const result = await axios.patch(url, data, { headers: { Authorization: `OAuth ${token}` } });
		return result;
	};

	return {
		getFlatResourceList,
		getDiskInfo,
		getResources,
		patchResource,
	}
}

export default YandexDisk