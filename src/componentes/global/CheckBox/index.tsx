import { TouchableOpacity, View,Text,StyleSheet } from "react-native";
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { theme } from "../../../theme";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface CheckBoxProps{
    isChecked: boolean;
    onChange: any;
    checkboxColor:string
    checkedBoxColor:string
    uncheckedBoxColor:string
    textColor:string
    label:string

}
export function CheckBox({ isChecked, onChange, checkboxColor, checkedBoxColor, uncheckedBoxColor, textColor, label }:CheckBoxProps) {
    const [checked, setChecked] = useState(isChecked || false);
  
    const toggleCheck = () => {
      setChecked(!checked);
      if (onChange) {
        onChange(!checked);
      }
    };
  
    return (
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={[
            styles.checkbox,
            {
              borderColor: checkboxColor || theme.colors.pink,
            },
          ]}
          onPress={toggleCheck}
        >
          <View
            style={[
              checked ? styles.checkedBox : styles.uncheckedBox,
              {
                backgroundColor: checked ? checkedBoxColor || theme.colors.pink : uncheckedBoxColor || 'transparent',
              },
            ]
        }>
        </View>
        {/* <FontAwesome  size={30} name="check" color={'black'}/> */}

          
        </TouchableOpacity>
        <Text style={[styles.checkboxText, { color: textColor || theme.colors.textGray }]}>
          {label || ''}
        </Text>
      </View>
    );
  }
const styles = StyleSheet.create({

checkboxContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
},
checkbox: {
  width: responsiveScreenWidth(5),
  height: responsiveScreenWidth(5),
  borderRadius: 4,
  borderWidth: 2,
  borderColor: theme.colors.pink,
  marginRight: 10,
  alignItems: 'center',
  justifyContent: 'center',
},
checkedBox: {
  width: responsiveScreenWidth(3.7),
  height: responsiveScreenWidth(3.7),
  backgroundColor: theme.colors.pink,
  borderRadius: 2,
},
uncheckedBox: {
  width: responsiveScreenWidth(3.7),
  height: responsiveScreenWidth(3.7),
  borderRadius: 2,
  borderWidth:0.9,
},
checkboxText: {
  color: theme.colors.textGray,
  fontSize: responsiveFontSize(2),
  fontWeight:'500',
  fontStyle:'italic'
},


});
