import { StyleSheet,Dimensions } from 'react-native';
import Values from '../values/values';

export default StyleSheet.create({
	EmptyBackground: {
		backgroundColor: '#000000'	
	},
	ImageBackground:{
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	FooterTabTransparent: {
		backgroundColor: 'rgba(0, 0, 0, 0.33)'
	},
	FooterTransparent: {
		bottom: 0,
		position: 'absolute',
		backgroundColor: 'transparent'
	},
	TabIcon: {
		color: '#FFFFFF'
	},
	ActiveTab: {
		backgroundColor: 'transparent',
		borderRadius: 0,
		borderTopColor: '#FFFFFF',
		borderTopWidth: 1
	},
	WhiteContent: {
		color: '#FFFFFF'
	},
	CenterText: {
		textAlign: 'center'
	},
	SectionTitle: {
		fontSize: Values.sizeMedium,
		fontWeight: 'bold',
		paddingBottom: Values.sizeSmall / 2
	},
	HorizontalLayout: {
		flex: 1,
		flexGrow: 1,
		flexDirection: 'row',
		alignContent: 'space-between',
		alignSelf: 'stretch'
	},
	RatingsContent: {
		top: Values.sizeExtraLarge * 11.25,
		alignSelf: 'stretch',
		flex: 1,
		right: 0,
		left: 0
	},
	Rating: {
		flex: 1
	}
});
