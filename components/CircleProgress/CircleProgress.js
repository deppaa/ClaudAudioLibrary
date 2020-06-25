import * as React from "react";
import Svg, {
	Circle,
	Text,
} from "react-native-svg";

const CircleProgress = ({ val, minValue = 0, maxValue = 100, size, strokeWidth }) => {
	let value = (val >= minValue) ? val : minValue
	let proggres = value / (maxValue / 100)

	let cx = size / 2
	let cy = size / 2
	let r = (size - strokeWidth) / 2;

	return (
		<Svg
			height={size}
			width={size}
		>
			<Circle
				stroke="#F5F5F5"
				fill="none"
				strokeWidth={strokeWidth}
				cx={cx}
				cy={cy}
				r={r}
			/>
			<Circle
				cx={cx}
				cy={cy}
				r={r}
				fill="none"
				stroke="#F5F5F5"
				stroke="#FFCE33"
				strokeWidth={strokeWidth}
				strokeDasharray={proggres + " 100"}
				strokeDashoffset="0"
				strokeLinecap="round"
			/>
			<Text
				fill="#FFCE33"
				stroke="none"
				fontSize="10"
				x={cx}
				y={cy + 2.5}
				textAnchor="middle"
			>
				{proggres + "%"}
			</Text>
		</Svg>
	)
}

export default CircleProgress