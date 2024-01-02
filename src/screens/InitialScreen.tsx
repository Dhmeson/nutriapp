import React from 'react';
import { StyleSheet, Text,Image, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { theme } from '../theme';
import { Asset } from 'expo-asset';
import { HeaderLogo } from '../componentes/global/HeaderLogo';
import { useNavigation } from '@react-navigation/native';
import { routerProps } from '../types/routes';
export default function InitialScreen() {
const backgroundImage = Asset.fromModule(require('../assets/global/background.png')).uri;
const girlImage = Asset.fromModule(require('../assets/global/girlWithHeart.png')).uri;
const { navigate } = useNavigation<routerProps>();
  return (
    <SafeAreaView style={styles.conteiner}>
    <Image source={{uri:backgroundImage}} width={responsiveScreenWidth(100)} height={responsiveScreenHeight(85)}></Image>
    <View style={styles.conteinerImages}>
    <HeaderLogo/>
    <Image style={styles.image} source={{uri:girlImage}} width={100} height={100}></Image>
    </View>
    <TouchableOpacity style={styles.btn} onPress={()=>navigate('Login')}>
      <Text  style={styles.text}>Entrar</Text>
    </TouchableOpacity>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1, 
        alignItems: 'center',
        justifyContent: 'flex-start',
       // backgroundColor:theme.colors.background
       
    },
    conteinerImages:{
        flex:1,
        position: 'absolute',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:responsiveScreenHeight(2)
       
    },
    image: {
        width:responsiveScreenWidth(80),
        height:responsiveScreenHeight(70),
        resizeMode: 'contain',
      },
    groupImages:{
       flex:1,
       flexDirection:'row',
       alignItems: 'center',
       justifyContent: 'center',
     
    },
    nutrorioImage: {
        width:responsiveScreenWidth(40),
        height:responsiveScreenHeight(10),
        resizeMode: 'contain',
      },
      peraImage: {
        width:responsiveScreenWidth(15),
        height:responsiveScreenHeight(10),
        resizeMode: 'contain',
      },
    btn: {
  // Estilos do botão de login...
  backgroundColor:theme.colors.background,
  borderWidth:2,
  padding:theme.padding.medium,
  width:responsiveScreenWidth(90),
  borderRadius:10,
  marginTop:responsiveScreenHeight(2),
  alignItems: 'center',

},
text:{
    fontSize:theme.fontSize.large,
    fontWeight:'600'
}

});
