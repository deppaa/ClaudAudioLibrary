import React, {useState} from 'react'
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	Image,
} from 'react-native'
import * as Progress from 'react-native-progress';
import HeaderConst from '../../components/Header/Header'
import Slider from '@react-native-community/slider'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

const ScreenWidth = Dimensions.get("window").width;

const PlayerScreens = ({ route, navigation }) => {
	const { poster, name } = route.params;
	const CustomSlider = ({ minimumValue, maximumValue, minimumTrackTintColor = "#FFCE33", maximumTrackTintColor = "#F5F5F5", curentTimes = 0 }) => {
		const [curentTime, setCurentTimes] = useState(curentTimes)

		const valueChange = async value => {
			setCurentTimes(value)
		};

		const slideWidt = 5
		const step = maximumValue / 49
		return (
			<View>
				<Slider
					style={{
						opacity: 0,
						height: 40,
						width: '100%',
						position: 'absolute',
						top: 0,
						left: 0,
						zIndex: 1,
						transform: [{ scaleX: 3 }, { scaleY: 3 }]
					}}
					minimumValue={minimumValue}
					maximumValue={maximumValue}
					minimumTrackTintColor="#FFFFFF"
					maximumTrackTintColor="#000000"
					thumbTintColor="#fff"
					onValueChange={valueChange}
				/>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 , width: '100%'}}>
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (0 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (1 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 13, backgroundColor: curentTime > step * (2 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 9, backgroundColor: curentTime > step * (3 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (4 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (5 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (6 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 21, backgroundColor: curentTime > step * (7 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 11, backgroundColor: curentTime > step * (8 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 17, backgroundColor: curentTime > step * (9 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 22, backgroundColor: curentTime > step * (10 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 24, backgroundColor: curentTime > step * (11 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 17, backgroundColor: curentTime > step * (12 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 38, backgroundColor: curentTime > step * (13 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 31, backgroundColor: curentTime > step * (14 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 37, backgroundColor: curentTime > step * (15 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 40, backgroundColor: curentTime > step * (16 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 37, backgroundColor: curentTime > step * (17 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 38, backgroundColor: curentTime > step * (18 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 24, backgroundColor: curentTime > step * (19 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 31, backgroundColor: curentTime > step * (20 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 40, backgroundColor: curentTime > step * (21 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 33, backgroundColor: curentTime > step * (22 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 24, backgroundColor: curentTime > step * (23 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 16, backgroundColor: curentTime > step * (24 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 12, backgroundColor: curentTime > step * (25 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 21, backgroundColor: curentTime > step * (26 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 15, backgroundColor: curentTime > step * (27 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 13, backgroundColor: curentTime > step * (28 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 24, backgroundColor: curentTime > step * (29 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 38, backgroundColor: curentTime > step * (30 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 37, backgroundColor: curentTime > step * (31 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 40, backgroundColor: curentTime > step * (32 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 26, backgroundColor: curentTime > step * (33 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 31, backgroundColor: curentTime > step * (34 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 37, backgroundColor: curentTime > step * (35 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 34, backgroundColor: curentTime > step * (36 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 24, backgroundColor: curentTime > step * (37 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 16, backgroundColor: curentTime > step * (38 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 11, backgroundColor: curentTime > step * (39 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 19, backgroundColor: curentTime > step * (40 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 15, backgroundColor: curentTime > step * (41 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (42 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (43 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (44 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 9, backgroundColor: curentTime > step * (45 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 13, backgroundColor: curentTime > step * (46 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (47 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
					<View style={{ width: slideWidt, height: 6, backgroundColor: curentTime > step * (48 + 1) ? minimumTrackTintColor : maximumTrackTintColor, borderRadius: 5 }} />
				</View>
			</View>
		)
	}
	return (
		<>
			<HeaderConst
				bg="#FFFFFF"
				title={name}
				noLeft={false}
				content="dark-content"
				navigation={navigation}
			/>
			<View style={styles.container}>
				<Progress.Bar progress={0.5} width={ScreenWidth} borderWidth={0} color={"#FFCE33"} height={1.5} style={{ backgroundColor: "#F5F5F5" }} />
				<View style={styles.wrapper}>
					<View style={styles.wrapperTop}>
						<View style={styles.imageWrapper}>
							<Image style={styles.img} source={{
								uri: poster,
								}}
							/>
						</View>
						<View style={styles.textWrapper}>
							<Text style={styles.name}>Эрагон 4 - 001 В качестве вступления</Text>
						</View>
						<View style={styles.sliderWrapper}>
							<CustomSlider
								minimumValue={0}
								maximumValue={1}
							/>
							<Text style={styles.sliderText}>05.28/15.28</Text>
						</View>
					</View>
					<View style={styles.wrapperBottom}>
						<View style={styles.playerControls}>
							<TouchableOpacity  style={styles.nextPrev}>
								<Icon name='md-skip-backward' size={18} color="#000" />
							</TouchableOpacity>
							<TouchableOpacity style={styles.playPause}>
								<Icon name='md-play' size={18} color="#FFCE33" />
							</TouchableOpacity>
							<TouchableOpacity style={styles.nextPrev}>
								<Icon name='md-skip-forward' size={18} color="#000" />
							</TouchableOpacity>
						</View>
						<View style={styles.subControls}>
							<View style={styles.subControlsWrapppew}>
								<TouchableOpacity style={styles.playlistBtn}>
									<Icon name='md-menu' size={30} color="#000" />
								</TouchableOpacity>
								<TouchableOpacity style={styles.speedModeBtn}>
									<Text style={styles.speedModeText}>1X</Text>
								</TouchableOpacity>
							</View>
							<TouchableOpacity style={styles.sleepModeBtn}>
								<Icon name='ios-moon' size={30} color="#000" />
							</TouchableOpacity>
						</View>
					</View>
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
		alignItems: 'center',
	},
	textWrapper: {
		flex: 1 / 6,
		alignItems: 'center'
	},
	sliderWrapper: {
		flex: 1 / 3.7,
		paddingHorizontal: 10,
		alignItems: 'center'
	},
	name: {
		fontSize: 24,
		fontWeight: 'bold',
		paddingHorizontal: 40,
		textAlign: 'center'
	},
	img: {
		width: 165,
		height: 252,
		resizeMode: 'cover',
		marginTop: 40
	},
	playPause: {
		width: 41,
		height: 41,
		backgroundColor: '#0C0C0C',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: 55
	},
	nextPrev: {
		width: 41,
		height: 41,
		backgroundColor: '#fff',
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center'
	},
	playerControls: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 31,
		paddingBottom: 70
	},
	sliderText: {
		marginTop: 17,
		fontSize: 10
	},
	sleepModeBtn: {
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		transform: [{ rotate: "245deg" }],
	},
	subControls: {
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	playlistBtn: {
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 27
	},
	speedModeBtn: {
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
	},
	speedModeText: {
		fontSize: 30
	},
	subControlsWrapppew: {
		flexDirection: 'row'
	}
})

export default PlayerScreens
