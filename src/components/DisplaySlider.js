import React from 'react';
import { View,ScrollView } from 'react-native';
import { Spinner,Button,Text,Icon,Content,Left } from 'native-base';
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
					{
						this.props.title ? this.props.title : 'No Title'
					}
				</Text>
				<Text style={[Styles.WhiteContent,Styles.SubTitle]}>
					{
						this.props.subtitle ? this.props.subtitle : ''
					}
				</Text>
				{
						this.props.loading ? <View>
								<Spinner style={{marginTop: 80}} color='#FFFFFF'>

								</Spinner>
							</View> : <ScrollView decelerationRate={'fast'} horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={[Styles.MovieCarousel]}>
							{
								this.props.movies.map((movie,index) => {
									return <DisplayItem select={this.props.selectMovie} movie = {movie} key={`movie-display-${index}`}/>
								})
							}
						</View>
					</ScrollView>
				}
				<View style={[Styles.SlideExtras]}>
					{
						this.props.extras ? this.props.extras.map((extra,index) => {
							return <Button key={`extra-${index}`} style={[index > 0 && Styles.PushLeft,Styles.ExtraButton]} onPress={() => {
								extra.action();
							}}><Text>{extra.label}</Text></Button>
						}) : null
					}
				</View>
			</View>
		);
	}
}

