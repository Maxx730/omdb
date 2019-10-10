import React from 'react';
import { View,Animated,ScrollView } from 'react-native';
import Styles from '../utils/styles';
import { apiRequest } from '../utils/ApiConfig';
import DisplaySlider from '../components/DisplaySlider';

let timer;

export default class TabHomeView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			current: 0,
			opacity: new Animated.Value(0),
			movies: [],
			popular: [],
			best: [],
			theaturesLoading: true,
			popularLoading: true,
			bestLoading: true,
			focused: null
		}
	}

	fadeIn(callback) {
		Animated.timing(this.state.opacity,{
			toValue: 1,
			duration: 1000,
			useNativeDriver: true
		}).start(() => {
			timer = setTimeout(() => {
				this.fadeOut()
			},5000);
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

	getCurrentDateRange() {
		let today = new Date();
		let lastMonth = new Date();
		lastMonth.setMonth(lastMonth.getMonth() - 1);

		return `primary_release_date.gte=${lastMonth.toISOString().split('T')[0]}&primary_release_date.lte=${today.toISOString().split('T')[0]}`
	}

	componentWillUnmount() {
		clearTimeout(timer);
	}

	componentDidMount() {
		apiRequest(`discover/movie?${this.getCurrentDateRange()}`).then(data => {
			this.setState({
				movies: data.results,
				theaturesLoading: false
			});
			this.fadeIn();
		});

		apiRequest('discover/movie?sort_by=popularity.desc').then(data => {
			this.setState({
				popular: data.results,
				popularLoading: false
			});
		});

		apiRequest(`discover/movie?primary_release_year${new Date().getFullYear()}=&sort_by=vote_average.asc`).then(data => {
			this.setState({
				best: data.results,
				bestLoading: false
			});
		});
	}

	render() {
		return(
			<View style={[Styles.EmptyBackground]}>
				{
					(this.state.movies && this.state.movies.length > 0) && <><Animated.Image blurRadius={1.5} source={{uri:`https://image.tmdb.org/t/p/w500/${this.state.movies[this.state.current].backdrop_path}`}} style={[Styles.ImageBackground,{opacity: this.state.opacity}]}/><View style={[Styles.ShadeBackground]}></View>
					<View style={[{position: 'absolute',top: 0,left: 0,right: 0,bottom: 0}]}>
						<ScrollView style={[Styles.TopPadding]}>
							<DisplaySlider selectMovie={this.props.setMovie} loading={this.state.theaturesLoading} title='In Theaters' movies={this.state.movies}/>
							<DisplaySlider selectMovie={this.props.setMovie} loading={this.state.popularLoading} title='Popular' movies={this.state.popular}/>
							<DisplaySlider selectMovie={this.props.setMovie} loading={this.state.bestLoading} title={`Best of ` + new Date().getFullYear()} movies={this.state.best}/>
							<View style={{height: 300}}>

							</View>
						</ScrollView>
					</View>
					</>
				}
			</View>
		);
	}
}
