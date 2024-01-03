import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth, } from 'react-native-responsive-dimensions';
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { routerProps } from '../types/routes';
import { HeaderLogoBackButton } from '../componentes/global/HeaderLogoBackButton';
export default function FoodPlanScreen() {
const { navigate } = useNavigation<routerProps>();
  return (
    <SafeAreaView style={styles.conteiner}>   
       <HeaderLogoBackButton/>
      <Text style={styles.title}>Plano alimentar</Text>
     
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
  
    title:{
      fontSize:responsiveFontSize(3),
      width:responsiveScreenWidth(90),
      color:theme.colors.textGray,textAlign:'left'
    },
      

});
