import React from 'react'
import {
	StyleSheet,
	View,
	Text
} from 'react-native'
import HeaderConst from '../../components/Header/Header'

const PlayerScreens = () => {
	return (
		<>
			<HeaderConst
				bg="#FFFFFF"
				title="Эрагон наследие"
				noLeft={false}
			/>
			<View>
				<Text>Плэйер</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default PlayerScreens;
