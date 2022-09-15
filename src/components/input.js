import React from "react";
import { View,Text,TextInput,StyleSheet } from "react-native";
import COLORS from '../const/colors';
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";

const Input = ({label,iconName,erro,onFocus=()=>{}, ...props}) =>{
        
     return(
          
        <View style={estilos.formContainer}>

         <Text style={estilos.inputLabel}>
          {label}
         </Text>

         <View style={[estilos.inputContainer,{borderColor: erro? COLORS.red : COLORS.darkBlue}]}>
         
         <Icon name={iconName} style={estilos.Icon}/>

            <TextInput
            style={estilos.textInput}
            autoCorrect={false}
            onFocus = {() => {onFocus()}}
            {...props}
            
            />
         </View>

         <Text>{erro}</Text>

        </View>

     );

}

const estilos = StyleSheet.create({

        formContainer:{
            marginBottom:20,
        },
        inputLabel:{
            marginVertical: 5,
            fontSize: 20,
            color: COLORS.gray,
        },
        inputContainer:{
            height: 55,
            backgroundColor: COLORS.light,
            flexDirection:"row",
            paddingHorizontal:15,
            borderWidth:0.5,
            alignItems:"center",
        },
        textInput:{
            color:COLORS.darkBlue,
            flex: 1
        },
        Icon:{
             fontSize:22,
             color:COLORS.darkBlue,
             marginRight:20,
        }
   

    });

export default Input;``