import * as React from "react"
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableHighlight
} from 'react-native'
import CircleProgress from '../CircleProgress/CircleProgress'

const ElementItem = ({ poster, text, progress }) => {
	const colors = ['#f44336', '#8BC34A', '#9c27b0', '#673ab7', '#3f51b5', '#44a05c']

	const getRandomInt = (max) => {
		return Math.floor(Math.random() * Math.floor(max));
	}

	const ImageBg = () => {
		if (poster) {
			return <Image style={styles.img} source={{ uri: poster }} />
		} else {
			return <View style={[styles.img, { backgroundColor: colors[getRandomInt(6)] }]}>
				<Text style={styles.iconFont}>{text[0]}</Text>
			</View>
		}
	}

	return (
		<View style={styles.item}>
			<View style={styles.item_wrapper}>
				<ImageBg />
				<Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{text}</Text>
				<View style={styles.controls}>
					<TouchableHighlight style={styles.play}>
						<Image style={styles.playImage} source={require('../../asset/Image/play.png')} />
					</TouchableHighlight>
					<CircleProgress val={progress} size={32} strokeWidth={3} />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		paddingHorizontal: 28,
		paddingVertical: 12,
		borderBottomWidth: 3,
		borderColor: '#F5F5F5',
	},
	img: {
		width: 61,
		height: 85,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	item_wrapper: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	title: {
		flex: 1,
		fontSize: 20,
		marginLeft: 15,
	},
	controls: {
		height: 85,
		paddingLeft: 15,
		justifyContent: 'space-between'
	},
	play: {
		width: 32,
		height: 32,
		backgroundColor: '#0C0C0C',
		borderRadius: 6,
		padding: 10
	},
	playImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	progress: {
		width: 32,
		height: 32,
		backgroundColor: '#FFCE33',
		borderRadius: 25
	},
	iconFont: {
		fontSize: 40,
		fontWeight: '600',
		color: '#fff',
		textTransform: 'uppercase'
	}
});

export default ElementItem