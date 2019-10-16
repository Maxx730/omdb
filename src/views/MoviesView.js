import React from 'react';
import { View,Text } from 'react-native';
import Styles from '../utils/styles';

export default class MoviesView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: []
		}
	}
	
	componentDidMount() {

	}

	render() {
		return(
			<View>
				<Text>MOVIES</Text>
			</View>
		)
	}
}