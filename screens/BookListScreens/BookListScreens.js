import React from 'react'
import {
	StyleSheet,
	View
} from 'react-native'
import HeaderConst from '../../components/Header/Header'
import BookList from '../../components/BookList/BookList'

const BookListScreens = ({ navigation }) => {
	return (
		<>
			<HeaderConst
				bg="#FFCE33"
				title="Cloud Audio Library"
				noLeft={true}
				navigation={navigation}
			/>
			<View style={styles.container}>
				<BookList navigation={navigation} />
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default BookListScreens;
