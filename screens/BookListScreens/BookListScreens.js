import React from 'react'
import {
	StyleSheet,
	View
} from 'react-native'
import HeaderConst from '../../components/Header/Header'
import BookList from '../../components/BookList/BookList'

const BookListScreens = () => {
	return (
		<>
			<HeaderConst
				bg="#FFCE33"
				title="Cloud Audio Library"
				noLeft={true}
			/>
			<View style={styles.container}>
				<BookList />
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default BookListScreens;
