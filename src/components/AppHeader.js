import React from 'react';
import { Container,Header,Body,Title,Left,Right } from 'native-base';
import { StyleSheet,View } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
	AppHeader: {
		
	}
});

export default class AppHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View style={styles.AppHeader}>

			</View>
		);
	}
}