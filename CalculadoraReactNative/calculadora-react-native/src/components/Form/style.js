// Nome: Eduardo Luiz Da Silva
// RA: 184767
// 6º Semestre de Sistema de informação

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height: "100%",
        bottom: 0,
        backgroundColor:"#FFF",
        alignItems:"center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        marginTop: 30,
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop: 20,
        padding:10,
    },
    formLabel:{
        marginTop:5,
        color:"#000",
        fontSize: 18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        height:40,
        borderRadius:50,
        backgroundColor:"#f0f0f0",
        margin:12,
        paddingLeft:10,
    },  

    viewButton:{
        display:"flex",
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:15,
    },

    textButton:{
        color: '#FFF',
        fontSize: 28,
        fontWeight: "bold",
        textAlignVertical:"bottom",
        marginVertical:10,
        textAlign:"center",

    },

    touchButtom:{
        backgroundColor:"#C00",
        width:55,
        height:55,
        borderRadius: 10,
    },

    resultLabel:{
        marginTop:40,
        color:"#000",
        fontWeight: "bold",
        fontSize: 18,
    },

    result:{
        marginTop:10,
        fontWeight: "bold",
        color:"#C00",
        fontSize: 24,
        marginBottom:20,
    }

});

export default styles