import React, { useEffect } from 'react'
import {
	FlatList,
	SafeAreaView,
	TouchableOpacity,
	StyleSheet
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ElementItem from '../ElementItem/ElementItem'
import { loadBooksList } from '../Store/BookList/actions'
import {
	BarIndicator
} from 'react-native-indicators';


const BookList = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadBooksList())
	}, [dispatch])

	const bookListState = useSelector(({ BooksList }) => {
		return {
			data: BooksList.data,
			preloader: BooksList.preloader
		}
	})

	return (
		<SafeAreaView style={styles.container}>
			<BarIndicator color='#FFCE33' size={40} style={{ display: bookListState.preloader ? 'flex' : 'none' }} />
			<FlatList
				style={{ display: !bookListState.preloader ? 'flex' : 'none' }}
				data={bookListState.data}
				renderItem={({ item }) => <TouchableOpacity onPress={() => alert(item.name)}><ElementItem poster={item.image} text={item.name} progress={0} /></TouchableOpacity>}
				keyExtractor={item => item.resource_id}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
})

export default BookList