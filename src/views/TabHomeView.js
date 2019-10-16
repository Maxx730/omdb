import React from 'react';
import { View,Animated,ScrollView,Button,Text } from 'react-native';
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
			shows: [],
			popular: [],
			moviesLoading: true,
			showsLoading: true,
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
				movies: data.results
			});
			setTimeout(() => {
				this.setState({
					moviesLoading: false
				})
				this.fadeIn();
			},500);
		});

		apiRequest('tv/popular').then(data => {
			this.setState({
				shows: data.results,
				showsLoading: false
			});
		});
	}

	render() {
		return(
			<View style={[Styles.EmptyBackground]}>
				{
					(this.state.movies && this.state.movies.length > 0) && <><Animated.Image blurRadius={1.5} source={{uri:`https://image.tmdb.org/t/p/w500/${this.state.movies[this.state.current].poster_path}`}} style={[Styles.ImageBackground,{opacity: this.state.opacity}]}/><View style={[Styles.ShadeBackground]}></View>
					<View style={[{position: 'absolute',top: 0,left: 0,right: 0,bottom: 0}]}>
						<ScrollView style={[Styles.TopPadding]}>
							<DisplaySlider selectMovie={this.props.setMovie} loading={this.state.moviesLoading} title='Movies' subtitle='See Whats Playing Near You' movies={this.state.movies} extras={[
							{
								label: 'Popular',
								action: () => {
									this.props.setTab('movies');
								}
							},
							{
								label: 'Showtimes',
								action: () => {
									this.props.setTab('movies');
								}
							},
							{
								label: 'Search',
								action: () => {
									this.props.setTab('search');
								}
							}
							]}/>
							<DisplaySlider selectShow={this.props.setShow} loading={this.state.showsLoading} title='TV Shows' subtitle='What to Binge Next?' movies={this.state.shows}/>
						</ScrollView>
					</View>
					</>
				}
			</View>
		);
	}
}
