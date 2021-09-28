import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default class Notice extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Notice</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EBF2FA',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontWeight:'bold',
        color:'#1B1F3B'
    },
    title :{
        fontSize:65,
        fontWeight:'300',
        paddingBottom:30,
        color : '#853355',
        fontWeight:'bold'
      },
    button:{
        width:300,
        height:45,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:25,
        backgroundColor:"#EF476F",
        shadowColor: "#FCEFF9",
    },
    categories:{}
})