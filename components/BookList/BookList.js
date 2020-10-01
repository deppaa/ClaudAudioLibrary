import React, { useEffect } from 'react'
import {
	FlatList,
	SafeAreaView,
	TouchableOpacity,
	StyleSheet,
	Dimensions
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ElementItem from '../ElementItem/ElementItem'
import { loadBooksList } from '../Store/BookList/actions'
import { BarIndicator } from 'react-native-indicators';

const ScreenHeight = Dimensions.get("window").height;

const BookList = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadBooksList())
	}, [dispatch])

	const preloader = () => {
		return (
			<BarIndicator style={styles.preloader} color='#FFCE33' size={40} />
		)
	}

	const bookListState = useSelector(({ BooksList }) => {
		return {
			data: BooksList.data,
		}
	})

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={styles.listData}
				data={bookListState.data}
				renderItem={({ item }) => <TouchableOpacity onPress={() => alert(item.name)}><ElementItem poster={item.image} text={item.name} progress={0} /></TouchableOpacity>}
				keyExtractor={item => item.resource_id}
				ListEmptyComponent={preloader}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	listData: {
		flex: 1,
	},
	preloader: {
		height: ScreenHeight
	}
})

export default BookList