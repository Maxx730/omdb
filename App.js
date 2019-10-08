import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { View,StyleSheet,Text } from 'react-native';
import Constants from 'expo-constants';

import AppHeader from './src/components/AppHeader';
import MovieSearch from './src/components/MovieSearch';
import MovieList from './src/components/MovieList';
import MovieDetails from './src/components/MovieDetails';

const styles = {
	AppLayout: {
		flex: 1
	}
}

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			movie: null
		}

		this.setMovie = this.setMovie.bind(this);
	}

	async componentDidMount() {
		//Needed to load Roboto fonts.
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font,
		});
		this.setState({
			loading: false
		});
	}

	setMovie(id) {
		this.setState({
			movie: id
		});
	}

	render() {
		if(this.state.loading) {
			return (
				<Text>
					Loading...
				</Text>
			);
		} else {
			return (
				<View style={styles.AppLayout}>
					{
						this.state.movie ? <MovieDetails setMovie={this.setMovie} movieId={this.state.movie}/> : <><MovieSearch/><MovieList setMovie={this.setMovie}/></>
					}
				</View>
			);
		}
	}
}
