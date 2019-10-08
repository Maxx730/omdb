import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { List,Spinner,Item,Icon,Input,Button } from 'native-base';
import { apiRequest } from '../utils/ApiConfig';

import MovieListItem from './MovieListItem';

const styles = {
	ListPanel: {
		
	},
	MovieList: {
		paddingRight: 16
	},
	MovieListItem: {
		
	},
	SearchPanel: {
		paddingLeft: 12,
		paddingRight: 16,
		paddingTop: 6
	}
}


export default class MovieList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			term: 'Wick',
			movies: []
		}

		this.applySearch = this.applySearch.bind(this);
	}

	componentDidMount() {
		this.applySearch();
	}

	applySearch() {
		this.setState({
			loading: true
		});

		apiRequest(`?s=${this.state.term}&page=1`).then(data => {
			this.setState({
				movies: data.Search,
				loading: false
			});
		});
	}

	render() {
		return(
			<View style={styles.ListPanel}>
				<View style={styles.SearchPanel}>
					<Item style={styles.SearchPanel}>
						<Icon active name='search' />
						<Input placeholder='Search' value={this.state.term} onChangeText={(value) => {
							this.setState({
								term: value
							});
						}}/>
						<Button transparent onPress={() => {
							this.applySearch();
						}}>
							<Text>
								Search
							</Text>
						</Button>
					</Item>
				</View>
				{
					this.state.loading ? <Spinner/> : <List style={styles.MovieList}>
						{
							this.state.movies.map((movie,index) => {
								return <MovieListItem setMovie={this.props.setMovie} key={`movielist-${index}`} movie={movie}/>
							})
						}
					</List>
				}
			</View>
		);
	}
}