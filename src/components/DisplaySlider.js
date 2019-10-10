import React from 'react';
import { View,Text,ScrollView } from 'react-native';
import { Spinner } from 'native-base';
import Styles from '../utils/styles';
import DisplayItem from './DisplayItem';

export default class DisplaySlider extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View style={[Styles.MovieDisplayLayout]}>
				<Text style={[Styles.WhiteContent,Styles.SectionTitle,Styles.CarouselTitle]}>
					{this.props.title}
				</Text>
				{
						this.props.loading ? <View>
								<Spinner style={{marginTop: 80}} color='#FFFFFF'>

								</Spinner>
							</View> : <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={[Styles.MovieCarousel]}>
							{
								this.props.movies.map((movie,index) => {
									return <DisplayItem select={this.props.selectMovie} movie = {movie} key={`movie-display-${index}`}/>
								})
							}
						</View>
					</ScrollView>
				}

			</View>
		);
	}
}