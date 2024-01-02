import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { theme } from '../theme';
import { InputText } from '../componentes/global/InputText';
import { HeaderLogo } from '../componentes/global/HeaderLogo';
import { useNavigation } from '@react-navigation/native';
import { routerProps } from '../types/routes';

export default function LoginScreen() {
  const { navigate } = useNavigation<routerProps>();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    // Aqui você pode adicionar lógica para autenticar o usuário
   // console.log('Username:', username);
    //console.log('Password:', password);
    //console.log('Manter conectado:', isChecked);
    navigate('Dashboard')
  };

  return (
    <SafeAreaView style={styles.conteiner}>
      <HeaderLogo/>
      <Text style={styles.title}>Entrar</Text>
      <InputText  label='Nome completo' placeholder='' onchange={((text)=>setUsername(text))}/>
      <InputText secureTextEntry={true} label='Senha' placeholder='Digite sua senha' onchange={((text)=>setUsername(text))}/>
   
     
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
      
        style={styles.checkbox}
        onPress={() => setIsChecked(!isChecked)}
      >
        <View style={isChecked ? styles.checkedBox : styles.uncheckedBox} />
      </TouchableOpacity>
      <Text style={styles.checkboxText}>Manter Conectado</Text>
    </View>
    <TouchableOpacity style={styles.loginBtn} onPress={()=> navigate('Dashboard')}>
      <Text style={styles.loginText}>Entrar</Text>
    </TouchableOpacity>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
    conteiner:{
        flex:1, 
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap:15,
        marginTop:responsiveScreenHeight(10),
       
    },
    logo:{},
// Estilos anteriores...
checkboxContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
},
checkbox: {
  width: 20,
  height: 20,
  borderRadius: 4,
  borderWidth: 2,
  borderColor: theme.colors.pink,
  marginRight: 10,
  alignItems: 'center',
  justifyContent: 'center',
},
checkedBox: {
  width: 14,
  height: 14,
  backgroundColor: theme.colors.pink,
  borderRadius: 2,
},
uncheckedBox: {
  width: 14,
  height: 14,
  borderRadius: 2,
  borderWidth: 1,
  borderColor: theme.colors.pink,
},
checkboxText: {
  color: theme.colors.textGray,
  fontSize: responsiveFontSize(2),
  fontWeight:'500',
  fontStyle:'italic'
},
loginBtn: {
  // Estilos do botão de login...
  backgroundColor:theme.colors.pink,
  width:responsiveScreenWidth(90),
  padding:theme.padding.medium,
  borderRadius:10,
  elevation: 4


},
loginText: {
  // Estilos do texto do botão de login...
  fontSize:responsiveFontSize(2),
  color:'white',
  textAlign: 'center',

},
inputView:{
    width: responsiveWidth(90),
    gap:5
},
inputText:{
    backgroundColor:theme.colors.background,
    borderColor:'black',
    borderWidth:2,
    padding:responsiveWidth(2),
   
    borderRadius:10
},title:{
  textAlign:'left',
  width:responsiveScreenWidth(90),
  color:theme.colors.textGray,
  letterSpacing:1.5,
  fontSize:responsiveFontSize(2.5)

}
});
