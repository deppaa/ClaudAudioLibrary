import React from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const HeaderConst = ({ bg, title, noLeft = false, content = "light-content", navigation }) => {
	const hide = noLeft ? "none" : "flex"

	const styles = StyleSheet.create({
		container: {
			height: 56,
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center"
		},
		titleWrapper: {
			flex: 2,
			height: 56,
		},
		button: {
			height: 56,
			width: 56,
			alignItems: "center",
			justifyContent: "center"
		},
		buttonLeft: {
			height: 56,
			width: 56,
			alignItems: "center",
			justifyContent: "center",
			display: hide
		},
		wrapperRight: {
			flex: 1,
			height: 56,
			alignItems: "flex-end"
		},
		wrapperLeft: {
			flex: 1,
			height: 56,
		},
		title: {
			fontSize: 18
		}
	})

	return (
		<View>
			<StatusBar
				backgroundColor={bg}
				barStyle={content}
			/>
			<View
				style={styles.container}
				backgroundColor={bg}
			>
				<View style={styles.wrapperLeft}>
					<TouchableOpacity style={styles.buttonLeft} onPress={() => { navigation.goBack() }}>
						<Icon name='ios-arrow-back' size={20} color="#000" />
					</TouchableOpacity>
				</View>
				<View>
					<Text style={styles.title}>{title}</Text>
				</View>
				<View style={styles.wrapperRight}>
					<TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Settings') }}>
						<Icon name='md-settings' size={18} color="#000" />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default HeaderConst;
