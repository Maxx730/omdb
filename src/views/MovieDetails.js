import React from 'react';
import { View,Text,Image } from 'react-native';
import { Spinner } from 'native-base';
import Styles from '../utils/styles';
import { apiRequest } from '../utils/ApiConfig';

export default class MovieDetails extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			movie: null
		}
	}

	componentDidMount() {
		apiRequest(`movie/${this.props.movie}`).then(data => {
			this.setState({
				movie: data,
				loading: false
			});
		});
	}

	render() {
		return(<>
			{
				this.state.loading ? <Spinner color='#FFFFFF'></Spinner> : <><Image blurRadius={1.5} source={{uri:`https://image.tmdb.org/t/p/w500/${this.state.movie.backdrop_path}`}} style={[Styles.ImageBackground,{opacity: this.state.opacity}]}/><View style={[Styles.ShadeBackground]}></View></>
			}
		
			<View style={[Styles.EmptyBackground]}>
				
			</View>
		</>);
	}
}