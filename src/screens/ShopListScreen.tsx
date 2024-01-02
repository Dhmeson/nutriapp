import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth, } from 'react-native-responsive-dimensions';
import { theme } from '../theme';
import { HeaderLogo } from '../componentes/global/HeaderLogo';
import { useNavigation } from '@react-navigation/native';
import { routerProps } from '../types/routes';
export default function ShopListScreen() {
const { navigate } = useNavigation<routerProps>();
  return (
    <SafeAreaView style={styles.conteiner}>   
      <HeaderLogo/>
      <Text style={styles.title}>Lista de compras</Text>
     
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
