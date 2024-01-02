import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth, } from 'react-native-responsive-dimensions';
import { theme } from '../theme';
import { HeaderLogo } from '../componentes/global/HeaderLogo';
import { useNavigation } from '@react-navigation/native';
import { routerProps } from '../types/routes';
import { DashboardButton } from '../componentes/DashboardButton';
export default function DashboardScreen() {
const { navigate } = useNavigation<routerProps>();
  return (
    <SafeAreaView style={styles.conteiner}>   
      <HeaderLogo/>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.conteinerButtons}>
        <DashboardButton key={2} name='calendar' text='Informações de consultas' action={()=>navigate('Schedule')}/> 
        <DashboardButton key={3} name='file-text-o' text='Plano alimentar' action={()=>navigate('FoodPlan')}/>
        <DashboardButton key={31} name='cart-arrow-down' text='Lista de compras' action={()=>navigate('ShopList')}/>
        <DashboardButton key={341} name='book' text='Diario alimentar' action={()=>navigate('Schedule')}/>
        <DashboardButton key={3444} name='bar-chart' text='Avaliações antropometricas' action={()=>navigate('Schedule')}/>
        <DashboardButton key={11} name='flask' text='Formulas (?)' action={()=>navigate('Schedule')}/>
        <DashboardButton key={111} name='file-text' text='Questionarios' action={()=>navigate('Schedule')}/>
        <DashboardButton key={1131} name='comments' text='Chat' action={()=>navigate('Schedule')}/>
        <DashboardButton key={199} name='gear' text='Configurações' action={()=>navigate('Schedule')}/>
      </View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1, 
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop:responsiveScreenHeight(2.5)
       
    },
    conteinerButtons:{
      flex:1,gap:responsiveScreenWidth(2.5),
      marginTop:responsiveScreenWidth(3)

    },
    title:{
      fontSize:responsiveFontSize(3),
      color:theme.colors.textGray
    }
 

});
