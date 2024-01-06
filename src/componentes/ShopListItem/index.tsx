import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from '../global/CheckBox';
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { useState } from 'react';
import { theme } from '../../theme';
interface ShopListItemProps{
    text:string
}
export function ShopListItem({text}:ShopListItemProps){
    const [checked,setChecked] = useState(false)
    return(
        <View style={styles.conteiner}>
            <Text  numberOfLines={1} ellipsizeMode="tail" style={[styles.itemName,{textDecorationLine:checked?'line-through':'none'}]}>
                {text}
            </Text>
            <CheckBox
        isChecked={checked}
        onChange={(data) => setChecked(data)} // Função para lidar com a mudança de estado
        checkboxColor={theme.colors.pink} // Cor da borda do checkbox
        //checkedBoxColor="green" // Cor do checkbox quando está marcado
        // uncheckedBoxColor="white" // Cor do checkbox quando não está marcado
        /> 
        </View>
        
    )
}
const styles = StyleSheet.create({
    conteiner:{
        flexDirection:'row',
        height:responsiveScreenHeight(5),
        
        
    },
    itemName:{
      fontSize:responsiveFontSize(2.3),
      width:'90%',
    }
      

});