import React from 'react';
import { View,Text,Image } from 'react-native';
import { Spinner,Button,Icon } from 'native-base';
import Styles from '../utils/styles';
import { apiRequest } from '../utils/ApiConfig';
import TextTicker from 'react-native-text-ticker';

export default class MovieDetails extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			dataTimeout: false,
			movie: null,
			credits: null
		}
	}

	componentDidMount() {
		apiRequest(`movie/${this.props.movie}`).then(data => {
			this.setState({
				movie: data
			});

			apiRequest(`movie/${this.props.movie}/credits`).then(data => {
				this.setState({
					credits: data
				});

				setTimeout(() => {
					this.setState({
						loading: false,
						dataTimeout: true
					})
				},700)
			});
		});
	}

	getGenres() {
		let genreString = '';

		this.state.movie.genres.map((genre,index) => {
			if(index === 0) {
				genreString += genre.name
			} else {
				genreString += `, ${genre.name}`;
			}
		});

		return genreString;
	}

	getRuntime() {
		return `${Math.floor(this.state.movie.runtime / 60)}hr${Math.floor(this.state.movie.runtime / 60) > 1 ? `s` : ``} ${this.state.movie.runtime % 60}min`
	}

	formatDate() {
		let newDate = new Date(this.state.movie.release_date);
		return `${newDate.getMonth()}/${newDate.getDate()}/${newDate.getFullYear()}`;
	}

	formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}
	
	generateStars() {
		let stars = [];

		for(let i = 0;i < 10;i++) {
			if(i < this.state.movie.vote_average) {
				if((i + 1) > this.state.movie.vote_average) {
					stars.push('star-half')
				} else {
					stars.push('star');
				}
			} else {
				stars.push('star-outline');
			}
		}

		return stars;
	}

	render() {
		return(<>
			{
				!this.state.loading && <><Image blurRadius={1.5} source={{uri:`https://image.tmdb.org/t/p/w500/${this.state.movie.backdrop_path}`}} style={[Styles.ImageBackground,{opacity: this.state.opacity}]}/><View style={[Styles.ShadeBackground]}></View></>
			}
		
			<View style={[Styles.EmptyBackground]}>
			</View>
			{!this.state.dataTimeout && <Spinner style={[Styles.DetailSpinner]} color='#FFFFFF'></Spinner>}
			{
				this.state.dataTimeout && <View style={[Styles.MovieDetails]}>
						<TextTicker
							style={[Styles.WhiteContent,Styles.MovieTitle]}
							duration={6000}
							loop
							repeatSpacer={50}
							marqueeDelay={5000}
							>
							{this.state.movie.original_title}
						</TextTicker>
						<TextTicker
							style={[Styles.WhiteContent,Styles.QuickInfo]}
							duration={6000}
							loop
							repeatSpacer={50}
							marqueeDelay={5000}
							>
							{
								`${this.getRuntime()} | ${this.getGenres()} | ${this.formatDate()}`
							}
						</TextTicker>
						<View style={[Styles.PosterContent]}>
							<Image source={{uri:`https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}} style={[Styles.MoviePoster]}/>
							<View style={[Styles.CastContent]}>
								<Text style={[Styles.WhiteContent,Styles.SectionTitle]}>Cast</Text>
								{
									this.state.credits.cast.map((member,index) => {
										return index < 8 && <Text key={`cast-${index}`} style={[Styles.WhiteContent]}>
											{member.name}
										</Text>
									})
								}
							</View>
						</View>
						<View style={[Styles.OverviewContent]}>
							<Text style={[Styles.WhiteContent,Styles.SectionTitle]}>
								Overview
							</Text>
							<Text style={[Styles.WhiteContent]}>
								{
									this.state.movie.overview
								}
							</Text>
						</View>
						<View style={[Styles.OverviewContent]}>
							<View style={[Styles.HorizontalLayout]}>
								<View style={{flexDirection:'row',justifyContent:'center'}}>
									{
										this.generateStars().map((star,index) => {
											return <Icon key={`star-${index}`} style={[Styles.Star]} name={star}/>
										})
									}
								</View>
							</View>
						</View>
						<Button style={[Styles.BackButton]} transparent onPress={() => {
							this.props.setMovie(null)
						}}>
							<Icon style={{color:'#FFFFFF'}} name='arrow-round-back' />
						</Button>
					</View>
			}
		</>);
	}
}

