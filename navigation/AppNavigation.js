import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BookListScreens } from '../screens/BookListScreens'
import { PlayerScreens } from '../screens/PlayerScreens'
import { SettingsScreens } from '../screens/SettingsScreens'
const AppNavigator = createStackNavigator({
	Main: BookListScreens,
	Player: PlayerScreens,
	Settings: SettingsScreens
}, {
	initialRouteName: 'Main',
	headerMode: 'none'
})

export const AppNavigation = createAppContainer(AppNavigator)