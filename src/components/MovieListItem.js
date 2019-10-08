import React from 'react';
import { Text } from 'react-native';
import { ListItem,Left,Right,Icon } from 'native-base';

export default class MovieListItem extends React.Component {

	render() {
		return(
			<ListItem onPress={() => {
				this.props.setMovie(this.props.movie.imdbID);
			}}>
				<Left>
					<Text>
						{
							this.props.movie.Title
						}
					</Text>
					<Text>
						{
							`(${this.props.movie.Year})`
						}
					</Text>
				</Left>
				<Right>
					<Icon name="arrow-forward"/>
				</Right>
			</ListItem>
		);
	}
}