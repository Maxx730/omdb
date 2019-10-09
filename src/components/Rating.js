import React from 'react';
import { View,Text,Image} from 'react-native';
import Styles from '../utils/styles';

export default class Rating extends React.Component {

	render() {
		return (
			<View style={[Styles.Rating]}>
				<Image style={{width: 24,height: 24}} source={require('../assets/images/rt_bad.png')}/>
				<View>
					<Text style={[Styles.WhiteContent,Styles.CenterText]}>
						{
							this.props.rating.Value
						}
					</Text>
				</View>
			</View>
		);
	}
}