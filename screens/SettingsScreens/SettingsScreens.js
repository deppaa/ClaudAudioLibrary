import React from 'react'
import {
	StyleSheet,
	View,
	Text
} from 'react-native'
import HeaderConst from '../../components/Header/Header'

const SettingsScreens = () => {
	return (
		<>
			<HeaderConst
				bg="#FFFFFF"
				title="Настройки"
				noLeft={false}
			/>
			<View>
				<Text>Настройки</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default SettingsScreens;
