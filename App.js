import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Image } from 'react-native';
import { Container,Content,Footer,FooterTab,Button,Text,Icon } from 'native-base';
import Styles from './src/utils/styles';

import TabHomeView from './src/views/TabHomeView';
import TabSearchView from './src/views/TabSearchView';
import TabSwitchView from './src/views/TabSwitchView';
import MovieDetails from './src/views/MovieDetails';
import MoviesView from './src/views/MoviesView';
import ShowsView from './src/views/ShowsView';

const styles = {
	AppLayout: {
		flex: 1
	}
}

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			movie: null,
			show: null,
			activeTab: 'home'
		}

		this.setMovie = this.setMovie.bind(this);
		this.setShow = this.setShow.bind(this);
		this.setActiveTab = this.setActiveTab.bind(this);
	}

	async componentDidMount() {
		//Needed to load Roboto fonts.
		await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			...Ionicons.font,
		});
		this.setState({
			loading: false
		});
	}

	setMovie(id) {
		this.setState({
			movie: id
		});
	}

	setShow(id) {
		this.setState({
			show: id
		});
	}

	setActiveTab(tab) {
		this.setState({
			activeTab: tab
		});
	}
	
	//Depending on the active tab return different views.
	getView() {
		if(this.state.movie) {
			return <MovieDetails setMovie={this.setMovie} movie={this.state.movie}/>
		} else {
			switch(this.state.activeTab) {
				case 'search':
					return <TabSearchView setShow={this.setShow} setMovie={this.setMovie}/>
				break;
				case 'switch':
					return <TabSwitchView setShow={this.setShow} setMovie={this.setMovie}/>
				break;
				case 'movies':
					return <MoviesView/>
				break;
				case 'shows':
					return <ShowsView/>
				break;
				default:
					return <TabHomeView setTab={this.setActiveTab} setShow={this.setShow} setMovie={this.setMovie}/>
				break;
			}
		}
	}

	render() {
		if(this.state.loading) {
			return (
				<Text>
					Loading...
				</Text>
			);
		} else {
			return (
				<Container>
					{
						this.getView()
					}
					<Content/>
					{
						!this.state.movie && <Footer style={[Styles.FooterTransparent]}>
						<FooterTab style={[Styles.FooterTabTransparent]} active>
							<Button style={[this.state.activeTab === 'home' && Styles.ActiveTab]} onPress={() => {
								this.setActiveTab('home')
							}}>
								<Icon style={[Styles.TabIcon]} name="home" />
							</Button>
						</FooterTab>
						<FooterTab style={[Styles.FooterTabTransparent]}>
							<Button style={[this.state.activeTab === 'search' && Styles.ActiveTab]} onPress={() => {
								this.setActiveTab('search')
							}}>
								<Icon style={[Styles.TabIcon]} name="search" />
							</Button>
						</FooterTab>
						<FooterTab style={[Styles.FooterTabTransparent]}>
							<Button style={[this.state.activeTab === 'switch' && Styles.ActiveTab]} onPress={() => {
								this.setActiveTab('switch');
							}}>
								<Icon style={[Styles.TabIcon]} name="switch" />
							</Button>
						</FooterTab>
					</Footer>
					}

				</Container>
			);
		}
	}
}
