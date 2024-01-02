import { View,Text,StyleSheet } from "react-native";
import { Button } from "../global/Button";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { theme } from "../../theme";
type ScheduleCardProps={
    iconName: React.ComponentProps<typeof FontAwesome>["name"];
    describe:string,
    weekTitle:string
}
export  function ScheduleCard({iconName,describe,weekTitle}:ScheduleCardProps){
    return(  
    <Button.Root  
        disabled={true} justifyContent="flex-start" backgroundColor="white"
        gap={responsiveScreenWidth(5)} paddingLeft={responsiveScreenWidth(1)}  width={responsiveScreenWidth(90)} 
        borderColor={theme.colors.gray} elevation={0}  
        height={responsiveScreenHeight(13)} borderRadius={10}>
    <Button.Icon color='#949292' name={iconName} size={responsiveScreenHeight(6)} w={12}></Button.Icon>
    <View style={styles.conteiner}>
        <Text style={styles.describe}>{describe}</Text>
        <Text style={styles.weekName}>{weekTitle}</Text>
    </View>
</Button.Root>
)
}
const styles = StyleSheet.create({
    conteiner:{
      flex: 1,
   
    },
   
    describe:{
      fontSize:responsiveFontSize(2.3),
      color:theme.colors.textGray,
      fontWeight:'500'
    
    },
    weekName:{
        fontSize:responsiveFontSize(2.2),
        color:theme.colors.textGray,
       
      }
 

});