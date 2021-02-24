import React, { useEffect } from 'react'
import {
	FlatList,
	SafeAreaView,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Text,
	ActivityIndicator
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ElementItem from '../ElementItem/ElementItem'
import { isEnd, isLoad, loadBooksList, nextOffset } from '../Store/BookList/actions'
import { BarIndicator } from 'react-native-indicators';
import { View } from 'native-base'

const ScreenHeight = Dimensions.get("window").height;

const BookList = ({ navigation }) => {
	const dispatch = useDispatch()

	const bookListState = useSelector(({ BooksList }) => {
		return {
			data: BooksList.data,
			offset: BooksList.offset,
			isLoad: BooksList.isLoad,
			isEnd: BooksList.isEnd
		}
	})

	useEffect(() => {
		console.log(useEffect)
		dispatch(isLoad(true))
		dispatch(loadBooksList(bookListState.offset, 20))
	}, [bookListState.offset])

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
				renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('Player', { poster: item.image, name: item.name })}><ElementItem poster={item.image} text={item.name} progress={0} /></TouchableOpacity>}
				keyExtractor={item => item.resource_id}
				ListFooterComponent={() => bookListState.isLoad?<View style={{paddingVertical: 10}}><ActivityIndicator color='#FFCE33' size="large"/></View>:null}
				onEndReached={()=>!bookListState.isEnd?dispatch(nextOffset(bookListState.offset + 10)):null}
				onEndReachedThreshold={0.1}
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