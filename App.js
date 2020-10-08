import React from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import store from './components/Store/reducers'
import PlayerScreens from './screens/PlayerScreens/PlayerScreens'
import BookListScreens from './screens/BookListScreens/BookListScreens'
import SettingsScreens from './screens/SettingsScreens/SettingsScreens'

const Stack = createStackNavigator()

const AppNavigation = () => {
	return (
		<Stack.Navigator headerMode={"none"}>
			<Stack.Screen name="BookList" component={BookListScreens} />
			<Stack.Screen name="Player" component={PlayerScreens} />
			<Stack.Screen name="Settings" component={SettingsScreens} />
		</Stack.Navigator>
	);
}

export default App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<AppNavigation />
			</NavigationContainer>
		</Provider>
	);
};
