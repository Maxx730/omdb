import { StyleSheet,Dimensions } from 'react-native';
import Values from '../values/values';

export default StyleSheet.create({
	TopPadding: {
		paddingTop: 60
	},
	HeadSpacing: {
		height: 100
	},
	EmptyBackground: {
		backgroundColor: '#000000',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	ImageBackground:{
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	ShadeBackground: {
		position: 'absolute',
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
	MovieDisplayLayout: {
		height: 300
	},
	MovieCarousel: {
		flex: 1,
		flexDirection: 'row'
	},
	MovieDisplayItem: {
		padding: 12,
		flex: 1,
		width: 140
	},
	MovieDisplayImage: {
		width: 120,
		height: 180,
		borderRadius: 3
	},
	MovieDisplayItemText: {
		paddingTop: Values.sizeSmall,
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center'
	},
	CarouselTitle: {
		fontSize: 32,
		paddingLeft: 12
	},
	SearchListPadding: {
		padding: 12
	},
	ZeroResults: {
		alignItems: 'center',
		height: Dimensions.get('window').height,
		padding: 24
	},
	SearchInput: {
		paddingLeft: Values.sizeMedium
	}
});

