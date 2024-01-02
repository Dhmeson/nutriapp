import FontAwesome from "@expo/vector-icons/FontAwesome";
import { iconColors } from "../../../types/styles";
import { responsiveWidth } from "react-native-responsive-dimensions";
interface props {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: iconColors;
	size?: number;
	w?: number;
}

export default function ButtonIcon({ w=10,...props }: props) {
	return <FontAwesome   size={props.size ?? 18} style={{ marginBottom: -3 ,width:responsiveWidth(w),maxWidth:100}} {...props} />;
}