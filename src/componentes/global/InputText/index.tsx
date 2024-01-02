import { TextInput, View ,Text,StyleSheet} from "react-native";
import { responsiveWidth,responsiveFontSize } from "react-native-responsive-dimensions";
import { theme } from "../../../theme";

interface InputTextProps  {
placeholder:string;
label:string;
onchange:(text:string) => void;
secureTextEntry?:boolean;
keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}
export function InputText({label,onchange,placeholder,keyboardType='default',secureTextEntry=false}:InputTextProps) {
    return <View style={styles.inputView}>
    <Text style={styles.label}>
        {label}
    </Text>
   
    <TextInput
      style={styles.inputText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.textGray}
      onChangeText={(text) => onchange(text)}
    />
  </View>
}
const styles = StyleSheet.create({
label:{
  color:theme.colors.textGray,
  fontWeight:'500',
  fontSize:responsiveFontSize(2)

}, inputWrapper: {
  backgroundColor: theme.colors.background,
  borderRadius: 10,
  // Adicionando sombra
  shadowColor: theme.colors.textGray,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 4, // Este é específico para Android
},
inputView:{
    width: responsiveWidth(90),
    gap:5

},
inputText:{
    backgroundColor:theme.colors.background,
    borderColor:theme.colors.textGray,
    borderWidth:2,
    padding:responsiveWidth(2),
    fontSize:responsiveFontSize(1.8),
   
    borderRadius:10
}
});