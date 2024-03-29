import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth,useResponsiveScreenWidth } from 'react-native-responsive-dimensions';
import { theme } from '../theme';
import { HeaderLogo } from '../componentes/global/HeaderLogo';
import { useNavigation } from '@react-navigation/native';
import { routerProps } from '../types/routes';
import { HeaderLogoBackButton } from '../componentes/global/HeaderLogoBackButton';
import { CheckBox } from '../componentes/global/CheckBox';
import { ShopListItem } from '../componentes/ShopListItem';
export default function ShopListScreen() {
const { navigate } = useNavigation<routerProps>();
  return (
    <SafeAreaView style={styles.conteiner}>   
        <HeaderLogoBackButton/>
      <Text style={styles.title}>Lista de compras</Text>
      <Text style={styles.patientName}>Paciente:Vitoria</Text>
      <ScrollView>
        <View style={styles.listItem}>
            <ShopListItem key={1} text='Alimento A'/>    
            <ShopListItem key={2} text='Alimento B'/>                
            <ShopListItem key={3} text='Alimento C'/>    

        </View>
      </ScrollView>
     
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
    patientName:{
      fontSize:responsiveFontSize(2.8),
      width:responsiveScreenWidth(90),
      color:theme.colors.textGray,textAlign:'center',
      marginTop:responsiveScreenHeight(2)
    },
    listItem:{
      flexDirection:'column',
      width:responsiveScreenWidth(90),
      
      justifyContent: 'space-between',
      marginTop:responsiveScreenHeight(1.5)
    },
    itemName:{
      fontSize:responsiveFontSize(2.3),
      width:'90%'
    }
      

});
