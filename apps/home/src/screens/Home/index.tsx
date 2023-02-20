import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Hyperlink } from '@metacraft/ui';

export const HomeScreen: FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>COMING SOON!</Text>
			<Text>
				<Text style={styles.sub}>Created with ❤️ by </Text>
				<Hyperlink href="https://stormgate.io" title="Stormgate.io" />
			</Text>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#001825',
		justifyContent: 'center',
		alignItems: 'center',
	},
	heading: {
		color: '#ffffff',
		fontSize: 42,
		marginBottom: 8,
	},
	sub: {
		color: '#888888',
	},
});
