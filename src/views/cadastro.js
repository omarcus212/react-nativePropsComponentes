import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, } from "react-native";
import Input from "../components/input";
import COLORS from "../const/colors";
import Button from "../components/Button";

const Cadastro = () => {
  //const name = 'tela de cadastro';

  /*********  captura com o uso de states *********/

  //CRIAÇÃO DA ESTRUTURA DE STATE QUE ARMAZENA OS DADOS
  //estrutura que representa os dados, função de acesso de dados
  const [inputs, setInputs] = React.useState({
    titulo: '',
    descricao: '',
    capa: '',
  });

  //FUNÇÃO QUE MANIPULA A ENTRADA DE DADOS NA STATE NO METÓDO onChangeText
  const handlerOnChange = (text, input) => {

    setInputs((prevState) => (


      // injeção de dados na state

      console.log(prevState),


      { ...prevState, [input]: text }


    ));


  }


  /*********  validação dos dados de cadastro *********/

  const validate = () => {

    let validate = true;

    if (!inputs.titulo) {
      validate = false;
      console.log("TITULO EM BRANCO");

    }

    if (!inputs.descricao) {
      validate = false;
      console.log("COMO ASSIM VC NÃO SABE A DESCRIÇÃO");



    }

    if (!inputs.capa) {
      validate = false;
      console.log("ISSO AI COLOCA UMA CAPA MSM NÃO");

    }



  }




  return (

    <SafeAreaView style={estilos.safe}>
      <ScrollView style={estilos.scroll}>

        <Text style={estilos.textTitle}>CADASTRO DE LIVRO</Text>

        <View style={estilos.viewForm}>

          <Input
            label="TITULO"
            onChangeText={(text) => handlerOnChange(text, 'titulo')} />

          <Input
            label="DESCRIÇÃO"
            onChangeText={(text) => handlerOnChange(text, 'descricao')} />

          <Input
            label="CAPA"
            onChangeText={(text) => handlerOnChange(text, 'capa')} />

          <Button
            texto="Cadastrar"
            onPress={validate} />

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
    marginVertical: 20,


  }


});

export default Cadastro;