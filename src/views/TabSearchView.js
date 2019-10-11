import React from 'react';
import { View,Text,ScrollView } from 'react-native';
import Styles from '../utils/styles';
import { Input,Icon,Item,Spinner,List,ListItem,Left,Right } from 'native-base';
import { apiRequest } from '../utils/ApiConfig';

export default class TabSearchView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			term: '',
			results: []
		}
	}

	render() {
		return(
			<View style={[Styles.EmptyBackground,Styles.TopPadding,Styles.SearchListPadding]}>
				<Item>
					<Icon style={[Styles.WhiteContent]} active name='search' />
					<Input style={[Styles.WhiteContent,Styles.SearchInput]} placeholder='Search' onChangeText={(value) => {
						this.setState({
							term: value
						},(value) => {
							apiRequest(`search/movie?query=${this.state.term}`).then(data => {
								this.setState({
									results: data.results
								});
							});
						});
					}}/>
				</Item>
				{
					this.state.loading && <View>
						<Spinner color="#FFFFFF"/>
					</View>
				}
				{
					this.state.results.length === 0 ? <View style={[Styles.ZeroResults]}>
							<Text style={[Styles.WhiteContent]}>
								No Results
							</Text>
						</View> : <View>
							<ScrollView>
								<List>
									{
										this.state.results.map((result,index) => {
											return <ListItem key={`search-result-${index}`} noIndent={true} itemDivider={false} onPress={() => {
												this.props.setMovie(result.id)
											}}>
												<Left>
													<Text style={[Styles.WhiteContent,Styles.SectionTitle]}>
														{result.original_title}
													</Text>
												</Left>
												<Right>
													<Text style={[Styles.WhiteContent]}>
														{!new Date(result.release_date).getFullYear() ? '--' : new Date(result.release_date).getFullYear()}
													</Text>
												</Right>
											</ListItem>
										})
									}
								</List>								
							</ScrollView>
						</View>
				}
			</View>
		);
	}
}

