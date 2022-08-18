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
  //state de validacao
  //cada REACT.useState devera ter um handler
  const [erros , setErros] = React.useState({});
  
  // função handler que configura as mensagens de erro na states

  const handlerErros = (errosMensange, input) =>{
       setErros((prevState)=>(
            {...prevState, [input]:errosMensange}
       ));
  }

  const validate = () => {

    let validate = true;

    if (!inputs.titulo) {
      handlerErros("informe o titulo do livro ", 'titulo')
      validate = false;
      // console.log("TITULO EM BRANCO");

    }else{
      
    }


    if (!inputs.descricao) {
      handlerErros("informe o descrição do livro ", 'descricao')
      validate = false;
      // console.log("DESCRIÇÀO EM BRANCO");
    }

    if (!inputs.capa) {
      handlerErros("informe o capa do livro ", 'capa')

    }



  }




  return (

    <SafeAreaView style={estilos.safe}>
      <ScrollView style={estilos.scroll}>

        <Text style={estilos.textTitle}>CADASTRO DE LIVRO</Text>

        <View style={estilos.viewForm}>

          <Input
            label="TITULO"
            erro={erros.titulo}
            onFocus={()=>{handlerErros(null, 'titulo')}}
            onChangeText={(text) => handlerOnChange(text, 'titulo')} />

          <Input
            label="DESCRIÇÃO"
            onFocus={()=>{handlerErros(null, 'descricao')}}
            erro={erros.descricao}
            onChangeText={(text) => handlerOnChange(text, 'descricao')} />

          <Input
            label="CAPA"
            onFocus={()=>{handlerErros(null, 'capa')}}
            erro={erros.capa}
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