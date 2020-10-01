import React from 'react'
import { Provider } from 'react-redux'
import PlayerScreens from './screens/PlayerScreens/PlayerScreens'
import BookListScreens from './screens/BookListScreens/BookListScreens'
import store from './components/Store/reducers'
export default App = () => {
	return (
		<Provider store={store}>
			<BookListScreens />
		</Provider>
	);
};
