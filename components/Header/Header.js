import React from 'react';
import { Header, Title, Button, Left, Right, Body, Text } from "native-base";
import Icon from 'react-native-vector-icons/MaterialIcons'

const HeaderConst = ({ bg, title, noLeft = false }) => {
	return (
		<Header
			androidStatusBarColor={bg}
			style={{
				backgroundColor: bg,
			}}
		>
			<Left style={{ flex: 1, }}>
				<Button transparent style={{ display: (noLeft) ? "none" : "flex" }}>
					<Icon name='navigate-before' size={27} color="#000" />
				</Button>
			</Left>
			<Body style={{ flex: 2, alignItems: 'center' }}>
				<Title style={{ color: '#000', display: 'flex' }}>{title}</Title>
			</Body>
			<Right style={{ flex: 1, }}>
				<Button transparent>
					<Icon name='settings' size={18} color="#000" />
				</Button>
			</Right>
		</Header>
	);
}
export default HeaderConst;
