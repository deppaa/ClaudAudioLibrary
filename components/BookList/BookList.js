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
import { loadBooksList, nextOffset } from '../Store/BookList/actions'
import { BarIndicator } from 'react-native-indicators';

const ScreenHeight = Dimensions.get("window").height;

const BookList = ({ navigation }) => {
	const dispatch = useDispatch()

	const bookListState = useSelector(({ BooksList }) => {
		return {
			data: BooksList.data,
			offset: BooksList.offset
		}
	})

	useEffect(() => {
		dispatch(loadBooksList(bookListState.offset, 10))
	}, [dispatch])

	const preloader = () => {
		return (
			<BarIndicator style={styles.preloader} color='#FFCE33' size={40} />
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={styles.listData}
				data={bookListState.data}
				renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('Player')}><ElementItem poster={item.image} text={item.name} progress={0} /></TouchableOpacity>}
				keyExtractor={item => item.resource_id}
				ListEmptyComponent={preloader}
				onEndReachedThreshold={0.5}
				onEndReached={() => {
					dispatch(nextOffset(10))
					dispatch(loadBooksList(bookListState.offset, 10))
				}}
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