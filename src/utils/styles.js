import { StyleSheet,Dimensions } from 'react-native';
import Values from '../values/values';

export default StyleSheet.create({
	TopPadding: {
		paddingTop: 60
	},
	HeadSpacing: {
		height: 100
	},
	PushLeft: {
		marginLeft: 6
	},
	EmptyBackground: {
		backgroundColor: '#000000',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
	ImageBackground:{
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		backgroundColor: '#000000'
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
	SubTitle: {
		paddingLeft: 12,
		paddingBottom: 6
	},
	SlideExtras: {
		flex: 1,
		flexDirection: 'row',
		padding: 6,
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
		paddingLeft: Values.sizeMedium,
		backgroundColor: 'rgba(255,255,255,.3)',
		borderRadius: 3,
		flexDirection: 'row'
	},
	MovieDetails: {
		position: 'absolute',
		paddingTop: Values.sizeLarge,
		bottom: 0,
		top: 0,
		left: 0,
		right: 0,
		paddingLeft: Values.sizeMedium,
		paddingRight: Values.sizeMedium
	},
	MovieTitle: {
		fontSize: Values.sizeLarge,
		fontWeight: 'bold',
		paddingTop: Values.sizeMedium
	},
	MoviePoster: {
		width: 200,
		height: 300,
		borderRadius: 3
	},
	QuickInfo: {

	},
	PosterContent: {
		flexDirection: 'row',
		paddingTop: Values.sizeMedium
	},
	CastContent: {
		paddingLeft: Values.sizeMedium
	},
	OverviewContent: {
		paddingTop: Values.sizeMedium
	},
	BackButton: {
		position: 'absolute',
		left: Values.sizeMedium,
		bottom: Values.sizeMedium
	},
	HorizontalLayout: {
		flexDirection: 'column'
	},
	Star: {
		color: '#E4BB23',
		marginLeft: Values.sizeSmall
	},
	DetailSpinner: {
		backgroundColor: 'rgba(0,0,0,.66)',
		height: Dimensions.get('window').height,
		position: 'absolute',
		zIndex: 999,
		width: Dimensions.get('window').width,
		justifyContent: 'center'
	},
	ExtraButton: {
		backgroundColor: 'rgba(255,255,255,.3)'
	},
	TabFrame: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	TabItem: {
		flexGrow: 1,
		borderRadius: 0,
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop:8,
		paddingBottom: 8,
		color: '#FFFFFF'
	},
	TabItemLeft: {
		borderLeftColor: '#FFFFFF',
		borderLeftWidth: 1
	},
	TabItemRight: {
		borderRightColor: '#FFFFFF',
		borderRightWidth: 1
	},
	TabSelected: {
		color: '#000000',
		backgroundColor: '#FFFFFF'
	}
});

