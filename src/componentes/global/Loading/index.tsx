import { Image, StyleSheet, View, Text } from "react-native";
import { theme } from "../../../theme";
import { Asset } from "expo-asset";

const loadingImage = Asset.fromModule(require('../../../assets/global/pera.png')).uri;

export default function Loading() {
	return (
		<View style={styles.container}>
			<Image source={{uri:loadingImage}} width={100} height={100}></Image>
			<Text style={styles.text}>Carregando aguarde ...</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.colors.background,
		gap: 20,
	},
	text: {
		fontSize: 40,
		fontWeight: "400",
		color: theme.colors.textGray,
	},
});