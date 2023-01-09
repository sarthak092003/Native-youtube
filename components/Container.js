import { StyleSheet, View } from "react-native"


const PageContainer = (props)=>{
    return (
        <View style = {styles.contianer}>
            {props.children}
        </View>
    )
}


const styles = StyleSheet.create({
    contianer:{
        alignContent:"center",
        flex:1,
        backgroundColor:"black"
    }
})


export default PageContainer;