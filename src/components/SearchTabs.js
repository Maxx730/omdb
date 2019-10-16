import React from 'react';
import { View,Button,Text,TouchableHighlight } from 'react-native';
import Styles from '../utils/styles';

export default class SearchTabs extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			selected: 0
		}
	}

	render() {
		return(
			<View style={[Styles.TabFrame]}>
				{
					this.props.tabs.map((tab,index) => {
						return <TouchableHighlight style={[{flexGrow: 1}]} key={`search-tab-${index}`} onPress={
							() => {
								this.setState({
									selected: index
								});
							}
						}>
							<View style={[Styles.TabItem,index === 0 && Styles.TabItemLeft,index === (this.props.tabs.length - 1) && Styles.TabItemRight,this.state.selected === index && Styles.TabSelected]} >
								<Text style={[this.state.selected !== index && Styles.WhiteContent]}>
									{
										tab.label
									}
								</Text>
							</View>
						</TouchableHighlight>
					})
				}
			</View>
		)
	}
}
