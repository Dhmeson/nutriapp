import { View,Image ,StyleSheet} from "react-native";
import { responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { Asset } from "expo-asset";
const nutrorioImage = Asset.fromModule(require('../../../assets/global/nutrorio.png')).uri;
const peraImage = Asset.fromModule(require('../../../assets/global/pera.png')).uri;

export function HeaderLogo(){
    return ( <View style={styles.groupImages}>
    <Image style={styles.peraImage} source={{uri:peraImage}} width={50} height={50}></Image>
    <Image style={styles.nutrorioImage} source={{uri:nutrorioImage}} width={50} height={50}></Image>
</View>)
}
const styles = StyleSheet.create({
   
    groupImages:{
       //flex:1,
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
        width:responsiveScreenWidth(12),
        height:responsiveScreenHeight(10),
        resizeMode: 'contain',
      },

});