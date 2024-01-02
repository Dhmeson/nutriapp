import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './src/screens/LoginScreen';
import InitialScreen from './src/screens/InitialScreen';
import Loading from './src/componentes/global/Loading';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import DashboardScreen from './src/screens/DashboardScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import FoodPlanScreen from './src/screens/FoodPlanScreen';
import ShopListScreen from './src/screens/ShopListScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() =>{
    const hideSplashScreen = async () => {
      SplashScreen.preventAutoHideAsync();
      setTimeout(async () => {
        await SplashScreen.hideAsync(); // Esconde a splash screen após 3 segundos
      }, 1000)}
      hideSplashScreen()
  },[]);

  return (
    <NavigationContainer   fallback={<Loading />}>
    <StatusBar style="auto" />
    <Stack.Navigator  
        initialRouteName='Init'
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right', // Definindo a animação de deslizamento
          gestureDirection: 'horizontal', // Direção do gesto para voltar
        }}
      >
      <Stack.Screen name='Init' component={InitialScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Dashboard' component={DashboardScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Schedule' component={ScheduleScreen} options={{ headerShown: false }} />
      <Stack.Screen name='FoodPlan' component={FoodPlanScreen} options={{ headerShown: false }} />
      <Stack.Screen name='ShopList' component={ShopListScreen} options={{ headerShown: false }} />



      
    </Stack.Navigator>
  </NavigationContainer>
  );
}
// useEffect(() => {
  //   // Esconder a splash screen após 3 segundos (simulando um carregamento fictício)
  //   const hideSplashScreen = async () => {
  //     SplashScreen.preventAutoHideAsync();
  //     setTimeout(async () => {
  //       await SplashScreen.hideAsync(); // Esconde a splash screen após 3 segundos
  //     }, 1000);
  //   };

  //   hideSplashScreen(); // Chama a função para esconder a splash screen após um tempo
  // }, []);
  // const [fontsLoaded] = Font.useFonts({
	// 	Fredoka: require("./assets/fonts/Fredoka_Condensed-Regular.ttf"),
	// 	FredokaBold: require("./assets/fonts/Fredoka_Expanded-Bold.ttf"),
	// });
	// const onLayoutRootView = useCallback(async () => {
	// 	if (fontsLoaded) {
	// 		await SplashScreen.hideAsync();
	// 	}
	// }, [fontsLoaded]);

	// if (!fontsLoaded) {
	// 	return <Loading />;
	//}