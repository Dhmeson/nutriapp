import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth, } from 'react-native-responsive-dimensions';
import { theme } from '../theme';
//import { useNavigation } from '@react-navigation/native';
//import { routerProps } from '../types/routes';
import { ScheduleCard } from '../componentes/ScheduleCard';
import { HeaderLogoBackButton } from '../componentes/global/HeaderLogoBackButton';
export default function ScheduleScreen() {
//const { navigate } = useNavigation<routerProps>();
  return (
    <SafeAreaView style={styles.conteiner}>   
      <HeaderLogoBackButton/>
      <Text style={styles.title}>Informações de consultas</Text>
      <View style={styles.main}>
        <Text style={styles.describe}>Proxima consulta</Text>
        <ScheduleCard key={1} describe='28 de janeiro de 2024' weekTitle='Quinta feia' iconName='calendar-check-o'/>
        <ScheduleCard key={2} describe='Horario' weekTitle='15:30' iconName='clock-o'/>
        <ScheduleCard key={3} describe='Endereço' weekTitle='Cristovao colombo 1355 10 andar numero 15' iconName='map-marker'/>
        <Text style={styles.labelButton}>
          Precisa alterar a data?
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>
            Fale com a Nutri
          </Text>
        </TouchableOpacity>
       
      </View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1, 
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop:responsiveScreenHeight(2.5),backgroundColor:'white'
       
    },
    main:{
      flex:1,gap:responsiveScreenWidth(0),

      marginTop:responsiveScreenWidth(10)

    },
    title:{
      fontSize:responsiveFontSize(3),
      width:responsiveScreenWidth(90),
      color:theme.colors.textGray,textAlign:'left'
    },
    describe:{
      fontSize:responsiveFontSize(2.5),
      color:theme.colors.textGray
    },
    labelButton:{
      fontSize:responsiveFontSize(2.5),
      color:theme.colors.textGray,
      textAlign: 'center',marginTop:responsiveScreenHeight(5)
    },
    button:{
      width:responsiveScreenWidth(90),
      backgroundColor:theme.colors.pink,
      height:responsiveScreenHeight(5),
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:10,borderRadius:5,elevation:10
    },
    btnText:{
      color:'white',fontSize:responsiveFontSize(2.5),
    }
 

});
