import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	Dimensions
} from 'react-native'
import * as Progress from 'react-native-progress';
import HeaderConst from '../../components/Header/Header'

const ScreenWidth = Dimensions.get("window").width;

const PlayerScreens = ({ navigation }) => {
	return (
		<>
			<HeaderConst
				bg="#FFFFFF"
				title="Эрагон наследие"
				noLeft={false}
				content="dark-content"
				navigation={navigation}
			/>
			<View style={styles.container}>
				<Progress.Bar progress={0.5} width={ScreenWidth} borderWidth={0} color={"#FFCE33"} height={1.5} style={{ backgroundColor: "#F5F5F5" }} />
				<View style={styles.wrapper}>
					<View style={styles.wrapperTop}>
						<View style={styles.imageWrapper}></View>
						<View style={styles.textWrapper}>
							<Text style={styles.name}>Эрагон 4 - 001 В качестве вступления</Text>
						</View>
						<View style={styles.sliderWrapper}></View>
					</View>
					<View style={styles.wrapperBottom}></View>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapper: {
		flex: 1
	},
	wrapperTop: {
		flex: 4 / 1,
		backgroundColor: "#fff",
		borderBottomLeftRadius: 60,
		borderBottomRightRadius: 60
	},
	wrapperBottom: {
		flex: 4 / 3
	},
	imageWrapper: {
		flex: 1 / 1.4,
	},
	textWrapper: {
		flex: 1 / 6,
		alignItems: 'center'
	},
	sliderWrapper: {
		flex: 1 / 3.7,
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold',
		paddingHorizontal: 40,
		textAlign: 'center'
	}
})

export default PlayerScreens
