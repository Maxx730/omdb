import React from 'react';
import { View,Text,Image,TouchableHighlight } from 'react-native';
import Styles from '../utils/styles';
import TextTicker from 'react-native-text-ticker';

export default class DisplayItem extends React.Component {
	render() {
		return(
			<TouchableHighlight onPress={() => {
					this.props.select(this.props.movie.id)
				}}>
					<View style={[Styles.MovieDisplayItem]}>
						<Image style={[Styles.MovieDisplayImage]} source={{uri: `https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}}/>
						<View style={[Styles.MovieDisplayItemText]}>
							<TextTicker
							style={[Styles.WhiteContent,{fontSize: 12}]}
							duration={6000}
							loop
							repeatSpacer={50}
							marqueeDelay={6000}
							>
								{this.props.movie.original_title ? this.props.movie.original_title : this.props.movie.original_name}
							</TextTicker>
						</View>
					</View>
			</TouchableHighlight>
		);
	}
}