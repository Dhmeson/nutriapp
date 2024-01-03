import { View,StyleSheet, TouchableOpacity } from "react-native";
import { HeaderLogo } from "../HeaderLogo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import React from "react";
import { responsiveWidth,responsiveHeight } from "react-native-responsive-dimensions";
import { theme } from "../../../theme";
import { useNavigation } from "@react-navigation/native";

export function HeaderLogoBackButton(){
    const navigate=useNavigation()
    return(
    <View style={styles.conteiner}>
        <TouchableOpacity onPress={()=>navigate.goBack()}>
            <FontAwesome name="arrow-circle-left"  color={theme.colors.pink} size={responsiveHeight(5)} style={{ width:responsiveWidth(10)}} />
        </TouchableOpacity>
        <HeaderLogo/>
    </View>)
}
const styles = StyleSheet.create({
    conteiner:{
        alignItems: 'center',
        gap:responsiveWidth(10),
        flexDirection:'row',marginTop:responsiveHeight(4),
        width:responsiveWidth(90),  
    }
});
