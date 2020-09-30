import React, { useEffect, useState } from 'react'
import {
	FlatList,
	SafeAreaView,
	TouchableOpacity
} from 'react-native'
import ElementItem from '../ElementItem/ElementItem'
import YandexDisk from '../Hoock/YandexDisk'

const BookList = () => {
	const { getResources } = YandexDisk()
	const [useData, updateData] = useState([])

	useEffect(async () => {
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

			updateData(data)
		} catch (error) {
			console.log(error)
		}
	}, [])

	return (
		<SafeAreaView>
			<FlatList
				data={useData}
				renderItem={({ item }) => <TouchableOpacity onPress={() => alert(item.name)}><ElementItem poster={item.image} text={item.name} progress={0} /></TouchableOpacity>}
				keyExtractor={item => item.resource_id}
			/>
		</SafeAreaView>
	)
}

export default BookList