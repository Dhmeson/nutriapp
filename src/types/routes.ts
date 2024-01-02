import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
	Init: undefined;
	Login: undefined;
	Register: undefined;
	Schedule: undefined;
	Dashboard: undefined;
	ShopList: undefined;
	FoodPlan: undefined;
	///Login: { itemId: number };
	

	// Adicione outras rotas conforme necessário
};
//caso tenha que passar parametro
///Login: { itemId: number };
//export type LoginScreenRouteProp = RouteProp<RootStackParamList, "Login">;

// type InitScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Init">;
// type LoginScreenRouteProp = NativeStackNavigationProp<RootStackParamList, "Login">;

type screenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
// export type StatusRouter = RouteProp<RootStackParamList>;

export type routerProps = screenNavigationProp;