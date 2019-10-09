import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Image } from 'react-native';
import { Container,Content,Footer,FooterTab,Button,Text,Icon } from 'native-base';
import Styles from './src/utils/styles';

import TabHomeView from './src/views/TabHomeView';
import TabSearchView from './src/views/TabSearchView';
import TabSwitchView from './src/views/TabSwitchView';

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
			activeTab: 'home'
		}

		this.setMovie = this.setMovie.bind(this);
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

	//Depending on the active tab return different views.
	getView() {
		switch(this.state.activeTab) {
			case 'search':
				return <TabSearchView/>
			break;
			case 'switch':
				return <TabSwitchView/>
			break;
			default:
				return <TabHomeView/>
			break;
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
					<Footer style={[Styles.FooterTransparent]}>
						<FooterTab style={[Styles.FooterTabTransparent]} active>
							<Button style={[this.state.activeTab === 'home' && Styles.ActiveTab]} onPress={() => {
								this.setState({
									activeTab: 'home'
								});
							}}>
								<Icon style={[Styles.TabIcon]} name="home" />
							</Button>
						</FooterTab>
						<FooterTab style={[Styles.FooterTabTransparent]}>
							<Button style={[this.state.activeTab === 'search' && Styles.ActiveTab]} onPress={() => {
								this.setState({
									activeTab: 'search'
								});
							}}>
								<Icon style={[Styles.TabIcon]} name="search" />
							</Button>
						</FooterTab>
						<FooterTab style={[Styles.FooterTabTransparent]}>
							<Button style={[this.state.activeTab === 'switch' && Styles.ActiveTab]} onPress={() => {
								this.setState({
									activeTab: 'switch'
								});
							}}>
								<Icon style={[Styles.TabIcon]} name="switch" />
							</Button>
						</FooterTab>
					</Footer>
				</Container>
			);
		}
	}
}
