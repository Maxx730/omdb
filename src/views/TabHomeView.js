import React from 'react';
import { View,Text,Image,Animated } from 'react-native';
import Styles from '../utils/styles';
import { apiRequest } from '../utils/ApiConfig';

export default class TabHomeView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			current: 0,
			opacity: new Animated.Value(0),
			movies: []
		}
	}

	fadeIn(callback) {
		Animated.timing(this.state.opacity,{
			toValue: 1,
			duration: 1000,
			useNativeDriver: true
		}).start(() => {
			this.fadeOut()
		});
	}

	fadeOut(callback) {
		Animated.timing(this.state.opacity,{
			toValue: 0,
			duration: 1000,
			useNativeDriver: true
		}).start(() => {
			let newCur = 0;

			if(this.state.current < this.state.movies.length - 1) {
				newCur = this.state.current + 1;
			}
			this.setState({
				current: newCur
			},() => {
				this.fadeIn()
			});
		});
	}

	componentDidMount() {
		apiRequest('discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22').then(data => {
			this.setState({
				movies: data.results
			});

			this.fadeIn();
		});
	}

	render() {
		return(
			<View style={[Styles.EmptyBackground]}>
				{
					(this.state.movies && this.state.movies.length > 0) && <Animated.Image blurRadius={1.5} source={{uri:`https://image.tmdb.org/t/p/w500/${this.state.movies[this.state.current].poster_path}`}} style={[Styles.ImageBackground,{opacity: this.state.opacity}]}/>
				}
			</View>
		);
	}
}