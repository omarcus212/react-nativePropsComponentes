import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, } from "react-native";
import Input from "../components/input";
import COLORS from "../const/colors";
import Button from "../components/Button";

const Cadastro = () => {
  const name = 'tela de cadastro';


  return (

    <SafeAreaView style={estilos.safe}>
      <ScrollView style={estilos.scroll}>

        <Text style={estilos.textTitle}>CADASTRO DE LIVRO</Text>

        <View style={estilos.viewForm}>

          <Input label="TITULO" />
          <Input label="DESCRIÇÃO" />
          <Input label="CAPA" />
          <Button texto="Cadastrar"/>

        </View>
        


      </ScrollView>
    </SafeAreaView>


  );

}


const estilos = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: COLORS.white
  },

  scroll: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  textTitle: {
    color: COLORS.black,
    fontSize: 30,
    fontWeight: "bold",

  },

  viewForm: {
   marginVertical:20,


  }


});

export default Cadastro;