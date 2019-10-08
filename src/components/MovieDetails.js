import React from 'react';
import { Dimensions,View,Text,StyleSheet,Image } from 'react-native';
import { Spinner,Icon } from 'native-base';
import { apiRequest } from '../utils/ApiConfig';
import Values from '../values/values';
import TextTicker from 'react-native-text-ticker';
import values from '../values/values';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
	MovieDetails: {

	},
	Shade: {
		backgroundColor: '#000000',
		opacity: 0.4,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		position: 'absolute'
	},
	MovieInfo: {
		position: 'absolute',
		padding: Values.sizeMedium,
		paddingTop: Constants.statusBarHeight + values.sizeMedium
	},
	MainInfo: {
		top: Values.sizeExtraLarge
	},
	WhiteContent: {
		color: '#FFFFFF'
	},
	TitleText: {
		fontSize: Values.sizeLarge
	},
	PosterContent: {
		top: Values.sizeExtraLarge * 2.75,
		flex: 1,
		flexDirection: 'row'
	},
	PosterSize: {
		width: 160,
		height: 220,
		borderRadius: 5,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22
	},
	PlotContent: {
		top: Values.sizeExtraLarge * 7.5
	},
	CastContent: {
		paddingLeft: values.sizeMedium
	},
	SectionTitle: {
		fontSize: values.sizeMedium,
		fontWeight: 'bold'
	}
})

export default class MovieDetails extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			details: null
		}
	}

	componentDidMount() {
		apiRequest(`?i=${this.props.movieId}&plot=full`).then(data => {
			this.setState({
				details: data
			});
		});
	}

	render() {
		return (
			<View style={styles.MovieDetails}>
				{
					this.state.details ? <View>
						<Image blurRadius={1.5} 
						style={{width: Math.round(Dimensions.get('window').width) + 10, height: Math.round(Dimensions.get('window').height)}}
						source={{
							uri: `${this.state.details.Poster}`
						}}/>
						<View style={[styles.Shade]}></View>
						<View style={styles.MovieInfo}>
							<Icon style={styles.WhiteContent} name='arrow-round-back' onPress={() => {
								this.props.setMovie(null);
							}}/>
						</View>
						<View style={[styles.MovieInfo,styles.MainInfo]}>
							<TextTicker
							style={[styles.WhiteContent,styles.TitleText]}
							duration={6000}
							loop
							repeatSpacer={100}
							marqueeDelay={2000}>
								{this.state.details.Title}
							</TextTicker>
							<TextTicker
							style={[styles.WhiteContent,]}
							duration={6000}
							loop
							repeatSpacer={100}
							marqueeDelay={2000}>
								{this.state.details.Rated} | {this.state.details.Runtime} | {this.state.details.Genre} | {this.state.details.Released}
							</TextTicker>
						</View>
						<View style={[styles.MovieInfo,styles.PosterContent]}>
							<View>
								<Image style={[styles.PosterSize]} source={{
									uri:`${this.state.details.Poster}`
								}}/>
							</View>

							<View style={[styles.CastContent]}>
								<Text style={[styles.WhiteContent,styles.SectionTitle]}>
									Cast
								</Text>
								{
									this.state.details.Actors.split(', ').map((actor,index) => {
										return <Text key={`actor-${index}`} style={[styles.WhiteContent]}>
											{actor}
										</Text>
									})
								}									
							</View>
						</View>
						<View style={[styles.MovieInfo,styles.PlotContent]}>
							<Text style={[styles.WhiteContent,styles.SectionTitle]}>
								Plot Summary
							</Text>
							<Text style={[styles.WhiteContent]}>
								{
									this.state.details.Plot
								}
							</Text>
						</View>
					</View> : <Spinner/>
				}
			</View>
		);
	}
}