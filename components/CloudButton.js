import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import colors from "../constants/colors"


const CloudButton = ({tile,setTile,title})=>{
    return(
            <View style ={styles.container}>
                <TouchableOpacity onPress={()=>setTile(title)} style = {[styles.buttonContiner,{backgroundColor:tile===title?'white':colors.buttonColor}]}>
                    <Text style = {[styles.button,{color:tile===title?'black':colors.ofWhite}]}>
                        {title}
                    </Text>
            </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        paddingHorizontal:4,
        justifyContent:"center",
        alignItems:"center",
    },
    buttonContiner:{
        padding:8,
        borderRadius:20,
        borderWidth:1,
        elevation:5
    },
    button:{
        fontWeight:"700",
        color:colors.ofWhite
    }
})

export default CloudButton