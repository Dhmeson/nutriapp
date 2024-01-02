import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { theme } from "../../../theme";
import { iconColors } from "../../../types/styles";

interface props extends ViewStyle {
	children: React.ReactNode;
	backgroundColor?: iconColors;
	action?: () => void;
	disabled?: boolean;
}
export default function ButtonRoot({ children, action,disabled=false, ...props }: props) {
	const containerStyle = {
		...styles.conteiner,
		...props,
		
	};
	return (
		<TouchableOpacity disabled={disabled} onPress={() => action?.()} style={[containerStyle]}>
			{children}
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	conteiner: {
		backgroundColor: theme.colors.background,
		width: 180,
		padding: 5,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		gap: 10,
		borderRadius: 10,
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 4,
		borderColor: theme.colors.gray
	},
});