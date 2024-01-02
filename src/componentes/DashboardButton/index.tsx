import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { Button } from "../global/Button";
import { theme } from "../../theme";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type DashboardProps={
    name: React.ComponentProps<typeof FontAwesome>["name"];
    text:string,
    action:()=>void
}
export function DashboardButton({name,text,action}:DashboardProps){
    //opacity={1} criar uma animaçao que ira aparecendo os botoes
    return(    
    <Button.Root action={()=>action()} justifyContent="flex-start" gap={responsiveScreenWidth(10)} paddingLeft={responsiveScreenWidth(5)}  width={responsiveScreenWidth(90)} borderColor={theme.colors.gray} 
        elevation={5}   height={responsiveScreenHeight(7)} borderRadius={10}>
        <Button.Icon color='#949292' name={name} size={responsiveScreenHeight(3)}></Button.Icon>
        <Button.Text text={text}
            color={theme.colors.gray}
            fontWeight="500"
            fontSize={responsiveScreenFontSize(2)} flex={1} textAlign="auto"
            >
         </Button.Text>
    </Button.Root>
  )
}